import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputField from '../components/CrewUI/Form/InputField/InputFIeld';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 10px 0;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform password reset logic
    navigate('/login');
  };

  return (
    <Container>
      <Form onSubmit={handleReset} aria-labelledby="reset-password-form-title">
        <h2 id="reset-password-form-title">Reset Password</h2>
        <InputField
          label="Email"
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ariaRequired={true}
          hiddenLabel={false}
          tabIndex={0}
        />
        <Button type="submit">Reset Password</Button>
        <Link role="button" onClick={() => navigate('/login')} tabIndex={0}>Login</Link>
      </Form>
    </Container>
  );
};

export default ResetPassword;
