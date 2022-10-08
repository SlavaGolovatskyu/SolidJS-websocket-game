import { styled } from 'solid-styled-components';

export const InputLabel = styled.input<{ isError?: boolean }>`
  width: 240px;
  padding: 15px;
  padding-right: 30px;
  background: #3a79ff;
  color: white;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;

  ${(props) =>
    props?.isError
      ? `
    border: 1px solid red;
    color: red;
  `
      : ''}

  &:focus, &:hover {
    &::placeholder {
      font-size: 12px;
      position: absolute;
      top: 2px;
    }
  }

  &::placeholder {
    color: ${(props) => (props?.isError ? 'red' : 'white')};
  }

  @media screen and (max-width: ${({ theme }) =>
      theme?.breakpoints.ms}) {
    width: 160px;
  } ;
`;
