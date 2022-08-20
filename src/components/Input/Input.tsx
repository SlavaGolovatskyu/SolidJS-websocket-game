import { Component } from 'solid-js';
import type { JSX } from 'solid-js';
import { styled } from 'solid-styled-components';

interface InputProps {
  isError?: boolean;
  placeholder?: string;
  onChange: (e: JSX.EventHandler<HTMLInputElement, InputEvent>) => void;
}

export const Input: Component<InputProps> = (props) => {
  return (
    <InputLabel {...props} />
  )
};

const InputLabel = styled.input<{ isError?: boolean }>`
  padding: 15px;
  background: silver;
  color: white;
  border: 1px solid black;
  border-radius: 20px;

  ${(props) => props?.isError ? `
    border: 1px solid red;
    color: red;
  ` : ''}

  &::placeholder {
    color: ${(props) => props?.isError ? 'red' : 'white'};
  }
`;