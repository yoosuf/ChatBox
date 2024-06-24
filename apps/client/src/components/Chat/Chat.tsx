import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import { AnimatePresence } from 'framer-motion';
import RecipientList from '../Recipient/RecipientList';
import RecipientDetail from '../Recipient/RecipientDetail';
import { User } from '../../types/user';
import { Message } from '../../types/conversation';
import { users } from '../../mock/users';
import { initialMessages } from '../../mock/conversations';

const ChatContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: var(--color-background);

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const DateHeading = styled.div`
  position: relative;
  text-align: center;
  margin: 10px 0;
  font-weight: bold;
  color: var(--color-text);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    background-color: var(--color-border);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

const currentUser = users[0];

const Chat: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<{ [key: number]: Message[] }>(initialMessages);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showRecipientDetail, setShowRecipientDetail] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (userId) {
      const user = users.find(u => u.id === parseInt(userId, 10));
      setSelectedUser(user || null);
    } else if (users.length > 0) {
      setSelectedUser(users[0]);
    }
  }, [userId]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (text: string) => {
    if (selectedUser) {
      const newMessage: Message = {
        id: (messages[selectedUser.id]?.length || 0) + 1,
        text,
        timestamp: new Date(),
        user: currentUser,
      };
      setMessages(prevMessages => ({
        ...prevMessages,
        [selectedUser.id]: [...(prevMessages[selectedUser.id] || []), newMessage]
      }));
    }
  };

  const groupedMessages = (selectedUser && messages[selectedUser.id] ? messages[selectedUser.id] : []).reduce((groups: { [key: string]: Message[] }, message: Message) => {
    const date = message.timestamp.toDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
    return groups;
  }, {});

  const sortedDates = Object.keys(groupedMessages).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

  return (
    <ChatContainer role="main" aria-labelledby="chat-header">
      <RecipientList
        users={users}
        onSelect={setSelectedUser}
        selectedUser={selectedUser}
      />
      <ChatContent>
        {selectedUser && (
          <ChatHeader
            user={selectedUser}
            onSettingsClick={() => setShowRecipientDetail(prev => !prev)}
          />
        )}
        <MessagesContainer ref={messagesContainerRef} role="log" aria-live="polite">
          {sortedDates.reverse().map(date => (
            <div key={date}>
              <DateHeading role="heading" aria-level={2}>{date}</DateHeading>
              {groupedMessages[date].map(message => (
                <ChatMessage key={message.id} message={message} currentUser={currentUser} />
              ))}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </MessagesContainer>
        {selectedUser && <ChatInput onSend={addMessage} />}
      </ChatContent>
      <AnimatePresence>
        {showRecipientDetail && selectedUser && (
          <RecipientDetail
            user={selectedUser}
            onClose={() => setShowRecipientDetail(false)}
          />
        )}
      </AnimatePresence>
    </ChatContainer>
  );
};

export default Chat;
