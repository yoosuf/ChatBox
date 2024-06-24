import React from 'react';
import styled from 'styled-components';
import Avatar from '../User/Avatar';
import { User } from '../../types/user';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--color-background);
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const SettingsButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: 1.2em;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;


interface ChatHeaderProps {
  user: User;
  onSettingsClick: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ user, onSettingsClick }) => {
  return (
    <HeaderContainer role="banner" aria-label={`Chat with ${user.name}`}>
      <UserDetails role="group" aria-labelledby="user-name">
        <Avatar name={user.name} />
        <UserName id="user-name">{user.name}</UserName>
      </UserDetails>
      <SettingsButton onClick={onSettingsClick} aria-label="Open settings">
        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path id="Path" fill="currentColor" fillRule="evenodd" stroke="none" d="M 16.5 9 C 16.5 13.1421 13.142099 16.5 9 16.5 C 4.857862 16.5 1.5 13.1421 1.5 9 C 1.5 4.857863 4.857862 1.5 9 1.5 C 13.142099 1.5 16.5 4.857863 16.5 9 Z M 9 13.3125 C 9.31065 13.3125 9.5625 13.06065 9.5625 12.75 L 9.5625 8.25 C 9.5625 7.93935 9.31065 7.6875 9 7.6875 C 8.68935 7.6875 8.4375 7.93935 8.4375 8.25 L 8.4375 12.75 C 8.4375 13.06065 8.68935 13.3125 9 13.3125 Z M 9 5.25 C 9.414225 5.25 9.75 5.58579 9.75 6 C 9.75 6.414209 9.414225 6.75 9 6.75 C 8.585775 6.75 8.25 6.414209 8.25 6 C 8.25 5.58579 8.585775 5.25 9 5.25 Z" />
        </svg>

      </SettingsButton>
    </HeaderContainer>
  );
};

export default ChatHeader;
