import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeSwitcher from '../Setting/ThemeSwitcher';
import Avatar from '../User/Avatar';
import { Conversation } from '../../types/conversation';

const RecipientListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  background-color: var(--color-background);
  border-right: 1px solid var(--color-border);
  padding: 0px;
  overflow-y: auto;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 60px;
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
  font-size: 2em;
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

interface ConversationsListProps {
  conversations: Conversation[];
  onSelect: (conversation: Conversation) => void;
  selectedConversation: Conversation | null;
}

const ConversationsList: React.FC<ConversationsListProps> = ({ conversations, onSelect, selectedConversation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = conversations.filter((conversation) =>
    conversation.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <RecipientListContainer role="complementary" aria-labelledby="recipient-list-header">
      <Header id="recipient-list-header">
        <AppTitle>MessengerApp</AppTitle>
        <NewMessageIcon aria-label="New message">
          <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path id="Path" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M 9 5.25 L 4.875 5.25 C 4.253677 5.25 3.75 5.753677 3.75 6.375 L 3.75 13.125 C 3.75 13.7463 4.253677 14.25 4.875 14.25 L 11.625 14.25 C 12.2463 14.25 12.75 13.7463 12.75 13.125 L 12.75 9.75" />
            <path id="path1" fill="currentColor" fill-rule="evenodd" stroke="none" d="M 14.391601 5.043751 L 14.391601 5.043751 C 14.6919 4.758457 14.704049 4.283737 14.418751 3.983438 L 14.418751 3.983438 C 14.133451 3.683129 13.658775 3.670958 13.358476 3.956249 L 13.358476 3.956249 L 13.212824 4.09461 C 12.90705 4.385084 12.900825 4.870477 13.199024 5.168693 L 13.199024 5.168693 C 13.48665 5.456287 13.951051 5.462243 14.24595 5.18211 L 14.391601 5.043751 Z M 12.6279 5.658225 C 12.926101 5.956448 12.919875 6.441833 12.6141 6.732307 L 6.891563 12.168751 L 6.891563 12.168751 C 6.591263 12.45405 6.116542 12.441899 5.83125 12.141525 L 5.83125 12.141525 C 5.545965 11.841225 5.558137 11.36655 5.858438 11.08125 L 5.858438 11.08125 L 11.580976 5.644807 C 11.875875 5.364675 12.340275 5.370629 12.6279 5.658225 L 12.6279 5.658225 Z" />
          </svg>
        </NewMessageIcon>
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
        {filteredConversations.map((conversation) => (
          <RecipientItem
            key={conversation.id}
            onClick={() => onSelect(conversation)}
            $isSelected={selectedConversation?.id === conversation.id}
            role="option"
            aria-selected={selectedConversation?.id === conversation.id}
            aria-label={`Select ${conversation.title}`}
          >
            <Avatar name={conversation.title} size="md" />
            <UserName>{conversation.title}</UserName>
          </RecipientItem>
        ))}
      </RecipientListContent>
      <RecipientListFooter>
        <ThemeSwitcher />
      </RecipientListFooter>
    </RecipientListContainer>
  );
};

export default ConversationsList;
