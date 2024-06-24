import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeSwitcher from '../Setting/ThemeSwitcher';
import Avatar from '../User/Avatar';
import { User } from '../../types/user';

const RecipientListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  background-color: var(--color-background);
  border-right: 1px solid var(--color-border);
  padding: 0px;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AppTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: var(--color-text);
`;

const NewMessageIcon = styled.button`
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: var(--color-text);
  aria-label: "New message";
`;

const SearchContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-background);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  -webkit-appearance: none; /* Remove default styling for search input */
  margin-top: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RecipientListContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const RecipientListFooter = styled.div`
  flex: 0;
  margin-top: 20px;
`;

const RecipientItem = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? 'var(--color-hover)' : 'var(--color-background)')};
  &:hover {
    background-color: var(--color-hover);
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 10px 0;
  }
`;

const UserName = styled.div`
  font-size: 1em;
  font-weight: bold;
  margin-left: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;


interface RecipientListProps {
  users: User[];
  onSelect: (user: User) => void;
  selectedUser: User | null;
}

const RecipientList: React.FC<RecipientListProps> = ({ users, onSelect, selectedUser }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <RecipientListContainer role="complementary" aria-labelledby="recipient-list-header">
      <Header id="recipient-list-header">
        <AppTitle>App</AppTitle>
        <NewMessageIcon aria-label="New message">✉️</NewMessageIcon>
      </Header>
      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Search recipients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search recipients"
        />
      </SearchContainer>
      <RecipientListContent role="listbox" aria-labelledby="recipient-list-header">
        {filteredUsers.map((user) => (
          <RecipientItem
            key={user.id}
            onClick={() => onSelect(user)}
            $isSelected={selectedUser?.id === user.id}
            role="option"
            aria-selected={selectedUser?.id === user.id}
            aria-label={`Select ${user.name}`}
          >
            <Avatar name={user.name} size="md" />
            <UserName>{user.name}</UserName>
          </RecipientItem>
        ))}
      </RecipientListContent>
      <RecipientListFooter>
        <ThemeSwitcher />
      </RecipientListFooter>
    </RecipientListContainer>
  );
};

export default RecipientList;
