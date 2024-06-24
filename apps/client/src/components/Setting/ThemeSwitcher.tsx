import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../utils/ThemeContext';

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  background-color: var(--color-button);
  color: var(--color-text);
  font-size: 1em;
  cursor: pointer;
  outline: none;
  appearance: none; /* Remove default arrow */

  &:hover {
    border-color: var(--color-hover);
  }

  &:focus {
    border-color: var(--color-hover);
    box-shadow: 0 0 5px var(--color-hover);
  }
`;

const Option = styled.option`
  background-color: var(--color-background);
  color: var(--color-text);
`;

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  return (
    <Select value={theme} onChange={handleThemeChange}>
      <Option value="auto">Auto</Option>
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
};

export default ThemeSwitcher;
