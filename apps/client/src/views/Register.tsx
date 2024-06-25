import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--color-background);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

const Link = styled.a`
  margin: 10px 0;
  color: var(--color-primary);
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: var(--color-primary-dark);
  }
`;

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Perform registration logic
    navigate('/login');
  };

  return (
    <Container>
      <Form onSubmit={handleRegister} aria-labelledby="register-form-title">
        <h2 id="register-form-title">Register</h2>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-required="true"
        />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-required="true"
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <Input
          type="password"
          id="confirm-password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          aria-required="true"
        />
        <Button type="submit">Register</Button>
        <Link role="button" onClick={() => navigate('/login')} tabIndex={0}>Login</Link>
      </Form>
    </Container>
  );
};

export default Register;
