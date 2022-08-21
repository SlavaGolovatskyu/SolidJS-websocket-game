import { Component } from 'solid-js';
import type { JSX } from 'solid-js';

import { styled } from 'solid-styled-components';

import { changeUsername } from 'src/store/reducers/user';
import useStore from 'src/hooks/useStore';

const Chat: Component = () => {
  const [currentStage, dispatch] = useStore(
    (state) => state.chat.currentStage,
  );
  const [username] = useStore((state) => state.user.username);

  const onChangeUsername: JSX.EventHandler<
    HTMLInputElement,
    InputEvent
  > = (e) => {
    dispatch(changeUsername(e.currentTarget.value));
  };

  return (
    <>
      <InputLabel
        value={username()}
        placeholder="Enter username"
        onInput={onChangeUsername}
      />
      {username()}
    </>
  );
};

const InputLabel = styled.input<{ isError?: boolean }>`
  padding: 15px;
  background: silver;
  color: white;
  border: 1px solid black;
  border-radius: 20px;

  ${(props) =>
    props?.isError
      ? `
    border: 1px solid red;
    color: red;
  `
      : ''}

  &::placeholder {
    color: ${(props) => (props?.isError ? 'red' : 'white')};
  }
`;

export default Chat;
