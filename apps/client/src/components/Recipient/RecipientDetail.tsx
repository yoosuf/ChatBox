import React from 'react';
import styled from 'styled-components';
import Avatar from '../User/Avatar';
import { User } from '../../types/user';

const DetailContainer = styled.div`
  width: 400px;
  background-color: var(--color-background);
  color: var(--color-text);
  border-left: 1px solid var(--color-border);
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  text-align: center; /* Center text */

  @media (max-width: 768px) {
    width: 100%;
    border-left: none;
    border-top: 1px solid var(--color-border);
  }
`;

const UserName = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const UserDetail = styled.div`
  font-size: 1em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: var(--color-button);
  color: var(--color-text);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-hover);
  }
`;



interface RecipientDetailProps {
  user: User;
  onClose: () => void;
}

const RecipientDetail: React.FC<RecipientDetailProps> = ({ user, onClose }) => {
  return (
    <DetailContainer role="dialog" aria-labelledby="recipient-name" aria-describedby="recipient-email">
      <Avatar name={user.name} size="lg" />
      <UserName id="recipient-name">{user.name}</UserName>
      <UserDetail id="recipient-email">Email: {user.name.toLowerCase().split(' ').join('.')}@example.com</UserDetail>
      <CloseButton onClick={onClose} aria-label="Close recipient details">Close</CloseButton>
    </DetailContainer>
  );
};

export default RecipientDetail;
