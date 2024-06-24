import React from 'react';
import styled from 'styled-components';
import { Message } from '../../types/conversation';
import { User } from '../../types/user';



interface ChatMessageProps {
  message: Message;
  currentUser: User;
}

const MessageContainer = styled.div<{ $isOwnMessage: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$isOwnMessage ? 'flex-end' : 'flex-start')};
  padding: 5px;
`;

const MessageBubble = styled.div<{ $isOwnMessage: boolean }>`
  max-width: 60%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.$isOwnMessage ? '#dcf8c6' : '#fff')};
  border: 1px solid ${(props) => (props.$isOwnMessage ? '#dcf8c6' : '#ddd')};
  word-wrap: break-word;
  position: relative;
  color: var(--color-text);
  margin-bottom: 20px; /* Add space for the timestamp */

  &:after {
    content: attr(data-timestamp);
    font-size: 0.8em;
    color: var(--color-text-secondary);
    position: absolute;
    bottom: -18px;
    right: 10px;
  }
`;

const ChatMessage: React.FC<ChatMessageProps> = ({ message, currentUser }) => {
  const isOwnMessage = message.user.id === currentUser.id;
  const timestamp = message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <MessageContainer
      $isOwnMessage={isOwnMessage}
      role="listitem"
      aria-label={`Message from ${message.user.name} at ${timestamp}`}
      aria-live="polite"
    >
      <MessageBubble
        $isOwnMessage={isOwnMessage}
        data-timestamp={timestamp}
        aria-labelledby={`message-text-${message.id} message-timestamp-${message.id}`}
      >
        <span id={`message-text-${message.id}`}>{message.text}</span>
      </MessageBubble>
      <div id={`message-timestamp-${message.id}`} className="sr-only">
        {timestamp}
      </div>
    </MessageContainer>
  );
};

export default ChatMessage;
