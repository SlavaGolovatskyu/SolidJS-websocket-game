import { Component } from 'solid-js';

import { Portal } from 'solid-js/web';
import { styled } from 'solid-styled-components';

import {
  CenteredBlock,
  DisplayFlex,
} from 'src/components/StyledComponents/Blocks/index';

import { ChatStages } from 'src/store/reducers/chat';
import useStore from 'src/hooks/useStore';
import { Username } from './components/Username';

const Chat: Component = () => {
  const [currentStage] = useStore<ChatStages>(
    (state) => state.chat.currentStage,
  );

  return (
    <>
      {currentStage() === ChatStages.USERNAME && <Username />}
      {currentStage() === ChatStages.CHOOSE_ROOM && (
        <Portal>
          <CenteredBlock>test</CenteredBlock>
        </Portal>
      )}
    </>
  );
};

export default Chat;
