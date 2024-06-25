import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: var(--color-background);
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  text-align: left;
`;

interface ModalProps {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, title, children }) => {
  return (
    <ModalOverlay onClick={onClose} role="dialog" aria-labelledby="modal-title" aria-modal="true">
      <ModalContent onClick={e => e.stopPropagation()}>
        <h2 id="modal-title">{title}</h2>
        {children}
        <Button onClick={onClose} aria-label="Close modal">Close</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

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

export default Modal;
