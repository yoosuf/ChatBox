import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Label = styled.label<{ hidden?: boolean }>`
  margin-bottom: ${(props) => (props.hidden ? '0' : '5px')};
  margin-right: ${(props) => (props.hidden ? '0' : '10px')};
  font-weight: bold;
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`;

const HiddenLabel = styled(Label)`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const InputWrapper = styled.div<{ labelPosition: 'block' | 'inline' }>`
  display: flex;
  flex-direction: ${(props) => (props.labelPosition === 'inline' ? 'row' : 'column')};
  align-items: ${(props) => (props.labelPosition === 'inline' ? 'center' : 'flex-start')};
`;

interface InputFieldProps {
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'search';
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ariaRequired?: boolean;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  hiddenLabel?: boolean;
  tabIndex?: number;
  labelPosition?: 'block' | 'inline';
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  ariaRequired = false,
  labelProps,
  hiddenLabel = false,
  tabIndex,
  labelPosition = 'block',
}) => (
  <InputWrapper labelPosition={labelPosition}>
    {hiddenLabel ? (
      <HiddenLabel htmlFor={id} {...labelProps}>
        {label}
      </HiddenLabel>
    ) : (
      <Label htmlFor={id} {...labelProps}>
        {label}
      </Label>
    )}
    <Input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      aria-required={ariaRequired}
      tabIndex={tabIndex}
    />
  </InputWrapper>
);

export default InputField;
