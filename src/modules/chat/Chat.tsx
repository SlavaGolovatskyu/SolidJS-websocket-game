import { Component, createSignal } from 'solid-js';

import { ChatStages } from 'src/store/reducers/chat';
import useStore from 'src/hooks/useStore';
import { Username } from './components/Username';
import { JoinToTheRoom } from './components/JoinToTheRoom';
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
      {currentStage() === ChatStages.USERNAME && (
        <Username onNextStage={joinToTheRoom} />
      )}
      <Modal close={onCloseModal} isOpened={modalIsOpen} withCloseIcon>
        <JoinToTheRoom />
      </Modal>
    </>
  );
};

export default Chat;
