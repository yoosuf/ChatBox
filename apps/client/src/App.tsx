import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from './utils/ThemeContext';
import Chat from './components/Chat/Chat';
import Login from './views/Login';
import Register from './views/Register';
import ResetPassword from './views/ResetPassword';
import SplashScreen from './components/Splash/SplashScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/chat/:userId" element={<Chat />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
