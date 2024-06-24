import React, { useState, useEffect } from 'react';
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
  padding: 20px;
  display: flex;
  flex-direction: column;

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


const users: User[] = [
  { id: 1, name: 'John Doe', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 2, name: 'Jane Smith', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 3, name: 'Alice Johnson', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 4, name: 'Bob Brown', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 5, name: 'Charlie Davis', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 6, name: 'David Evans', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 7, name: 'Eve Foster', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 8, name: 'Frank Green', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 9, name: 'Grace Harris', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 10, name: 'Henry Irving', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 11, name: 'Isabel Johnson', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 12, name: 'Jack King', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 13, name: 'Karen Lee', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 14, name: 'Larry Moore', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 15, name: 'Mia Nelson', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 16, name: 'Nina Owens', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 17, name: 'Oscar Perez', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 18, name: 'Paul Quinn', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 19, name: 'Quinn Rogers', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 20, name: 'Rachel Scott', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 21, name: 'Steve Thomas', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
  { id: 22, name: 'Tina Underwood', avatar: 'https://source.unsplash.com/random/40x40/?portrait' },
];

const currentUser = users[0];

const initialMessages: { [key: number]: Message[] } = {
  1: [
    { id: 1, text: 'Hello, John!', timestamp: new Date('2023-06-01T10:00:00'), user: users[1] },
    { id: 2, text: 'Hi! How are you?', timestamp: new Date('2023-06-01T10:05:00'), user: users[0] },
    { id: 3, text: 'I am good, thank you! How about you?', timestamp: new Date('2023-06-01T10:10:00'), user: users[1] },
    { id: 4, text: 'I am fine too!', timestamp: new Date('2023-06-01T10:15:00'), user: users[0] },
    { id: 5, text: 'What are you up to today?', timestamp: new Date('2023-06-02T10:20:00'), user: users[1] },
    { id: 6, text: 'Just working on some projects. You?', timestamp: new Date('2023-06-02T10:25:00'), user: users[0] },
    { id: 1, text: 'Hello, John!', timestamp: new Date('2023-06-01T10:00:00'), user: users[1] },
    { id: 2, text: 'Hi! How are you?', timestamp: new Date('2023-06-01T10:05:00'), user: users[0] },
    { id: 3, text: 'I am good, thank you! How about you?', timestamp: new Date('2023-06-01T10:10:00'), user: users[1] },
    { id: 4, text: 'I am fine too!', timestamp: new Date('2023-06-01T10:15:00'), user: users[0] },
    { id: 5, text: 'What are you up to today?', timestamp: new Date('2023-06-02T10:20:00'), user: users[1] },
    { id: 6, text: 'Just working on some projects. You?', timestamp: new Date('2023-06-02T10:25:00'), user: users[0] },
    { id: 1, text: 'Hello, John!', timestamp: new Date('2023-06-01T10:00:00'), user: users[1] },
    { id: 2, text: 'Hi! How are you?', timestamp: new Date('2023-06-01T10:05:00'), user: users[0] },
    { id: 3, text: 'I am good, thank you! How about you?', timestamp: new Date('2023-06-01T10:10:00'), user: users[1] },
    { id: 4, text: 'I am fine too!', timestamp: new Date('2023-06-01T10:15:00'), user: users[0] },
    { id: 5, text: 'What are you up to today?', timestamp: new Date('2023-06-02T10:20:00'), user: users[1] },
    { id: 6, text: 'Just working on some projects. You?', timestamp: new Date('2023-06-02T10:25:00'), user: users[0] },
    { id: 1, text: 'Hello, John!', timestamp: new Date('2023-06-01T10:00:00'), user: users[1] },
    { id: 2, text: 'Hi! How are you?', timestamp: new Date('2023-06-01T10:05:00'), user: users[0] },
    { id: 3, text: 'I am good, thank you! How about you?', timestamp: new Date('2023-06-01T10:10:00'), user: users[1] },
    { id: 4, text: 'I am fine too!', timestamp: new Date('2023-06-01T10:15:00'), user: users[0] },
    { id: 5, text: 'What are you up to today?', timestamp: new Date('2023-06-02T10:20:00'), user: users[1] },
    { id: 6, text: 'Just working on some projects. You?', timestamp: new Date('2023-06-02T10:25:00'), user: users[0] },
    { id: 1, text: 'Hello, John!', timestamp: new Date('2023-06-01T10:00:00'), user: users[1] },
    { id: 2, text: 'Hi! How are you?', timestamp: new Date('2023-06-01T10:05:00'), user: users[0] },
    { id: 3, text: 'I am good, thank you! How about you?', timestamp: new Date('2023-06-01T10:10:00'), user: users[1] },
    { id: 4, text: 'I am fine too!', timestamp: new Date('2023-06-01T10:15:00'), user: users[0] },
    { id: 5, text: 'What are you up to today?', timestamp: new Date('2023-06-02T10:20:00'), user: users[1] },
    { id: 6, text: 'Just working on some projects. You?', timestamp: new Date('2023-06-02T10:25:00'), user: users[0] },
  ],
  2: [
    { id: 1, text: 'Hello, Jane!', timestamp: new Date('2023-06-02T09:00:00'), user: users[0] },
    { id: 2, text: 'Hi! I am good. How about you?', timestamp: new Date('2023-06-02T09:05:00'), user: users[1] },
    { id: 3, text: 'Doing great, thanks!', timestamp: new Date('2023-06-02T09:10:00'), user: users[0] },
    { id: 4, text: 'Good to hear!', timestamp: new Date('2023-06-02T09:15:00'), user: users[1] },
  ],
  3: [
    { id: 1, text: 'Hey Alice, long time no see!', timestamp: new Date('2023-06-03T14:00:00'), user: users[0] },
    { id: 2, text: 'Indeed, it has been a while!', timestamp: new Date('2023-06-03T14:05:00'), user: users[2] },
    { id: 3, text: 'How have you been?', timestamp: new Date('2023-06-03T14:10:00'), user: users[0] },
    { id: 4, text: 'I have been great, just busy with work.', timestamp: new Date('2023-06-03T14:15:00'), user: users[2] },
  ],
  4: [
    { id: 1, text: 'Hey Bob!', timestamp: new Date('2023-06-04T16:00:00'), user: users[0] },
    { id: 2, text: 'Hello! How are things?', timestamp: new Date('2023-06-04T16:05:00'), user: users[3] },
    { id: 3, text: 'Things are good, just staying busy.', timestamp: new Date('2023-06-04T16:10:00'), user: users[0] },
    { id: 4, text: 'Same here. Let’s catch up soon.', timestamp: new Date('2023-06-04T16:15:00'), user: users[3] },
  ],
  5: [
    { id: 1, text: 'Hi Charlie!', timestamp: new Date('2023-06-05T12:00:00'), user: users[0] },
    { id: 2, text: 'Hey! What’s up?', timestamp: new Date('2023-06-05T12:05:00'), user: users[4] },
    { id: 3, text: 'Not much, just working. You?', timestamp: new Date('2023-06-05T12:10:00'), user: users[0] },
    { id: 4, text: 'Same here. Let’s grab coffee sometime.', timestamp: new Date('2023-06-05T12:15:00'), user: users[4] },
  ],
};

const Chat: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<{ [key: number]: Message[] }>(initialMessages);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showRecipientDetail, setShowRecipientDetail] = useState<boolean>(false);

  useEffect(() => {
    if (userId) {
      const user = users.find(u => u.id === parseInt(userId, 10));
      setSelectedUser(user || null);
    } else if (users.length > 0) {
      setSelectedUser(users[0]);
    }
  }, [userId]);

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

  const toggleRecipientDetail = () => {
    setShowRecipientDetail(prevState => !prevState);
  };

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
            onSettingsClick={toggleRecipientDetail}
          />
        )}
        <MessagesContainer role="log" aria-live="polite">
          {Object.keys(groupedMessages).map(date => (
            <div key={date}>
              <DateHeading role="heading" aria-level={2}>{date}</DateHeading>
              {groupedMessages[date].map(message => (
                <ChatMessage key={message.id} message={message} currentUser={currentUser} />
              ))}
            </div>
          ))}
        </MessagesContainer>
        {selectedUser && <ChatInput onSend={addMessage} />}
      </ChatContent>
      <AnimatePresence>
        {showRecipientDetail && selectedUser && (
          <RecipientDetail
            user={selectedUser}
            onClose={toggleRecipientDetail}
          />
        )}
      </AnimatePresence>
    </ChatContainer>
  );
};

export default Chat;
