import { Component, createSignal } from 'solid-js';

import { ChatStages } from 'src/store/reducers/chat';
import useStore from 'src/hooks/useStore';
import { Username } from './components/Username';
import Modal from 'src/components/Modal/Modal';

const Chat: Component = () => {
  const [currentStage] = useStore<ChatStages>(
    (state) => state.chat.currentStage,
  );
  const [modalIsOpen, setModalIsOpen] = createSignal(false);

  const onCloseModal = () => setModalIsOpen(false);
  const joinToTheRoom = () => setModalIsOpen(true);

  return (
    <>
      <Username onNextStage={joinToTheRoom} />
      <Modal close={onCloseModal} isOpened={modalIsOpen} withCloseIcon>
        <div>11111111 22222222 333333333 44444444</div>
      </Modal>
      {/* {currentStage() === ChatStages.USERNAME && <Username />}
      {currentStage() === ChatStages.CHOOSE_ROOM && (
        <Modal close={onCloseModal} isOpened={modalIsOpen}>
          <div>11111111 22222222 333333333 44444444</div>
        </Modal>
      )} */}
    </>
  );
};

export default Chat;
