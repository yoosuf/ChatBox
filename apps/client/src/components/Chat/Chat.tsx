import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import { AnimatePresence } from 'framer-motion';
import ConversationsList from './ConversationsList';
import { Conversation } from '../../types/conversation';
import { conversationsData } from '../../mock/conversations';
import { userData } from '../../mock/users';
import { Message } from '../../types/message';
import ConversationDetail from './ConversationDetail';

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
    flex-shrink: 1;

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

const Chat: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>();
  const navigate = useNavigate();
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [showRecipientDetail, setShowRecipientDetail] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (userId) {
      const conversation = conversationsData.find(conversation =>
        conversation.participants.some(user => user.id === parseInt(userId, 10))
      );
      setSelectedConversation(conversation || null);
    } else if (conversationsData.length > 0) {
      setSelectedConversation(conversationsData[0]);
    }
  }, [userId]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [selectedConversation]);

  const addMessage = (text: string) => {
    if (selectedConversation) {
      const newMessage = {
        id: selectedConversation.messages.length + 1,
        text,
        timestamp: new Date(),
        user: userData[0],
        conversationId: selectedConversation.id,
      };
      setSelectedConversation(prevConversation => {
        if (prevConversation) {
          return {
            ...prevConversation,
            messages: [...prevConversation.messages, newMessage],
          };
        }
        return prevConversation;
      });
    }
  };

  const groupedMessages = (selectedConversation ? selectedConversation.messages : []).reduce((groups: { [key: string]: Message[] }, message: Message) => {
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
      <ConversationsList
        conversations={conversationsData}
        onSelect={setSelectedConversation}
        selectedConversation={selectedConversation}
      />
      <ChatContent>
        {selectedConversation && (
          <ChatHeader
          conversation={selectedConversation}
            onSettingsClick={() => setShowRecipientDetail(prev => !prev)}
          />
        )}
        <MessagesContainer ref={messagesContainerRef} role="log" aria-live="polite">
          {sortedDates.reverse().map(date => (
            <div key={date}>
              <DateHeading role="heading" aria-level={2}>{date}</DateHeading>
              {groupedMessages[date].map(message => (
                <ChatMessage key={message.id} message={message} currentUser={userData[0]} />
              ))}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </MessagesContainer>
        {selectedConversation && <ChatInput onSend={addMessage} />}
      </ChatContent>
      <AnimatePresence>
        {showRecipientDetail && selectedConversation && (
          <ConversationDetail
          conversation={selectedConversation}
            onClose={() => setShowRecipientDetail(false)}
          />
        )}
      </AnimatePresence>
    </ChatContainer>
  );
};

export default Chat;
