import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: var(--color-background);
  color: var(--color-input-text);
  border-top: 1px solid var(--color-border);
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid var(--color-border);
  background-color: var(--color-input-background);
  color: var(--color-input-text);


  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <InputContainer role="form" aria-labelledby="chat-input-label">
      <label id="chat-input-label" className="sr-only">Type a message</label>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSend();
        }}
        aria-label="Type a message"
      />
      <Button onClick={handleSend} aria-label="Send message">Send</Button>
    </InputContainer>
  );
};

export default ChatInput;
