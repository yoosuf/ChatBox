import React from 'react';
import styled, { css } from 'styled-components';
import { stringToColor } from '../../utils/colorUtils';

interface AvatarProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  xs: css`
    width: 20px;
    height: 20px;
    font-size: 0.5em;
  `,
  sm: css`
    width: 30px;
    height: 30px;
    font-size: 0.75em;
  `,
  md: css`
    width: 40px;
    height: 40px;
    font-size: 1em;
  `,
  lg: css`
    width: 100px;
    height: 100px;
    font-size: 3.25em;
  `,
};

const AvatarContainer = styled.div<{ $bgColor: string; size: 'xs' | 'sm' | 'md' | 'lg' }>`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$bgColor};
  color: white;
  font-weight: bold;
  margin-right: 10px;
  ${(props) => sizeStyles[props.size]}

  @media (max-width: 768px) {
    margin-right: 0px;
    ${(props) => props.size === 'md' && sizeStyles.sm}
    ${(props) => props.size === 'lg' && sizeStyles.md}
  }
`;

const Avatar: React.FC<AvatarProps> = ({ name, size = 'md' }) => {
  let initials = 'N/A';
  let bgColor = '#000'; // default color

  try {
    initials = name.split(' ').map(n => n[0]).join('');
    bgColor = stringToColor(name);
  } catch (error) {
    console.error('Error generating initials or color for Avatar:', error);
  }

  return <AvatarContainer $bgColor={bgColor} size={size}>{initials}</AvatarContainer>;
};

export default Avatar;
