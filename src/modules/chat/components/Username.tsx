import useStore from 'src/hooks/useStore';

import { createMemo, JSX, Component } from 'solid-js';

import { styled } from 'solid-styled-components';

import { changeUsername } from 'src/store/reducers/user';

import {
  CenteredBlock,
  DisplayFlex,
} from 'src/components/StyledComponents/Blocks';

import { InputLabel } from './InputLabel';
import { MIN_USERNAME_LENGTH } from '../models';

interface UsernameProps {
  onNextStage: () => void;
}

export const Username: Component<UsernameProps> = (props) => {
  const [username, dispatch] = useStore<string>(
    (state) => state.user.username,
  );

  const isNextStageOpened = createMemo(
    () => username().length <= MIN_USERNAME_LENGTH,
  );

  const onChangeUsername: JSX.EventHandler<
    HTMLInputElement,
    InputEvent
  > = (e) => dispatch(changeUsername(e.currentTarget.value));

  const clearUsername = () => dispatch(changeUsername(''));

  return (
    <CenteredBlock>
      <DisplayFlex flexDirection="column" gap="15px">
        <InputLabel
          value={username()}
          placeholder="Enter username"
          onInput={onChangeUsername}
          id="username--input-id"
        />
        <StyledLabel for="username--input-id" onClick={clearUsername}>
          X
        </StyledLabel>
        <Button
          onClick={props.onNextStage}
          disabled={isNextStageOpened()}
        >
          Next step
        </Button>
      </DisplayFlex>
    </CenteredBlock>
  );
};

const StyledLabel = styled.label`
  transform: rotate(270deg);
  position: absolute;
  right: 5px;
  color: white;
  top: 10px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(0.85);
  }
`;

const Button = styled.button`
  width: 120px;
  background: green;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  border-radius: 15px;
  border: none;
  padding: 10px;
  transition: all 0.3s ease-in-out;

  &:not(:disabled):hover {
    cursor: pointer;
    filter: brightness(0.85);
  }

  &:disabled {
    background: silver;
  }
`;
