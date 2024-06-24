import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

// Function to dynamically create the root element if it doesn't exist
const createRootElement = (id: string) => {
  const rootElement = document.getElementById(id);
  if (rootElement) {
    return rootElement;
  }
  const newRootElement = document.createElement('div');
  newRootElement.id = id;
  document.body.appendChild(newRootElement);
  return newRootElement;
};

// Create or get the root element
const rootElement = createRootElement('root');

// Use React's createRoot method to render the application
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
