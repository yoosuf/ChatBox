import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SplashScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-background);
  color: var(--color-text);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const SplashScreenText = styled.h1`
  font-size: 2em;
`;

const SplashScreen: React.FC = () => {
  return (
    <SplashScreenContainer>
      <SplashScreenText>Loading...</SplashScreenText>
    </SplashScreenContainer>
  );
};

export default SplashScreen;
