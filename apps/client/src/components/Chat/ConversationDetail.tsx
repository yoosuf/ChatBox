import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from '../User/Avatar';
import { Conversation, ConversationType } from '../../types/conversation';
import AddMembersModal from './AddMembersModal';
import { contactsData } from '../../mock/users'; // Import your users data
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
    border-left: 1px solid var(--color-border);
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

const ParticipantsList = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: left;
`;

const Participant = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ParticipantName = styled.div`
  margin-left: 10px;
`;

const AddButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: var(--color-button);
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-hover);
  }
`;

interface ConversationDetailProps {
  conversation: Conversation;
  onClose: () => void;
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({ conversation, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMembers = (newMembers: User[]) => {
    // Handle the logic to add new members to the conversation
  };

  return (
    <DetailContainer role="dialog" aria-labelledby="recipient-name">
      <Avatar name={conversation.title} size="lg" />
      <UserName id="recipient-name">{conversation.title}</UserName>

      {conversation.type === ConversationType.Group && (
        <>
          <ParticipantsList>
            <h3>{conversation.participants.length} Members</h3>
            {conversation.participants.map(participant => (
              <Participant key={participant.id}>
                <Avatar name={participant.name} size="sm" />
                <ParticipantName>{participant.name}</ParticipantName>
              </Participant>
            ))}
          </ParticipantsList>
          <AddButton onClick={() => setIsModalOpen(true)}>Add Members</AddButton>
        </>
      )}

      <CloseButton onClick={onClose} aria-label="Close recipient details">Close</CloseButton>

      {isModalOpen && (
        <AddMembersModal
          onClose={() => setIsModalOpen(false)}
          onAddMembers={handleAddMembers}
          allUsers={contactsData}
          currentParticipants={conversation.participants}
        />
      )}
    </DetailContainer>
  );
};

export default ConversationDetail;
