import { Component, createSignal } from 'solid-js';

import { Portal } from 'solid-js/web';

import {
  CenteredBlock,
  DisplayFlex,
} from 'src/components/StyledComponents/Blocks/index';

import { ChatStages } from 'src/store/reducers/chat';
import useStore from 'src/hooks/useStore';
import { Username } from './components/Username';
import Modal from 'src/components/Modal/Modal';

const Chat: Component = () => {
  const [currentStage] = useStore<ChatStages>(
    (state) => state.chat.currentStage,
  );
  const [modalIsOpen, setModalIsOpen] = createSignal(true);

  const onCloseModal = () => setModalIsOpen(false);

  return (
    <>
      {currentStage() === ChatStages.USERNAME && <Username />}
      {currentStage() === ChatStages.CHOOSE_ROOM && (
        <Modal close={onCloseModal} isOpened={modalIsOpen}>
          <div>
            ahahahahaahahahahahaahahahahahaahahahahahaahahahahahaah
          </div>
        </Modal>
      )}
    </>
  );
};

export default Chat;
