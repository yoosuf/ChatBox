import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Contact, Participant } from '../../types/user';
import Avatar from '../User/Avatar';
import Modal from '../CrewUI/Modal/Modal';

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const UserList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserItem = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 100%;
`;

const UserName = styled.span`
  flex: 1;
  margin-left: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  background-color: var(--color-button);
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-hover);
  }
`;

interface AddMembersModalProps {
  onClose: () => void;
  onAddMembers: (members: Participant[]) => void;
  allUsers: Contact[];
  currentParticipants: Participant[];
}

const AddMembersModal: React.FC<AddMembersModalProps> = ({ onClose, onAddMembers, allUsers, currentParticipants }) => {
  const [selectedUsers, setSelectedUsers] = useState<Participant[]>(currentParticipants);

  useEffect(() => {
    setSelectedUsers(currentParticipants);
  }, [currentParticipants]);

  const handleCheckboxChange = (user: Contact) => {
    const participant: Participant = { ...user, role: 'member' }; // Add default role
    if (selectedUsers.find(u => u.id === user.id)) {
      setSelectedUsers(prevSelectedUsers => prevSelectedUsers.filter(u => u.id !== user.id));
    } else {
      setSelectedUsers(prevSelectedUsers => [...prevSelectedUsers, participant]);
    }
  };

  const handleSubmit = () => {
    onAddMembers(selectedUsers);
    onClose();
  };

  return (
    <Modal onClose={onClose} title="Add Members">
      <Input placeholder="Search users..." aria-label="Search users" />
      <UserList role="listbox" aria-labelledby="user-list">
        {allUsers.map(user => (
          <UserItem key={user.id} role="option">
            <Checkbox
              type="checkbox"
              checked={!!selectedUsers.find(u => u.id === user.id)}
              onChange={() => handleCheckboxChange(user)}
              aria-checked={!!selectedUsers.find(u => u.id === user.id)}
              aria-label={`Select ${user.name}`}
            />
            <Avatar name={user.name} size="sm" />
            <UserName>{user.name}</UserName>
          </UserItem>
        ))}
      </UserList>
      <Button onClick={handleSubmit} aria-label="Add selected members">Add Members</Button>
      <Button onClick={onClose} aria-label="Cancel adding members">Cancel</Button>
    </Modal>
  );
};

export default AddMembersModal;
