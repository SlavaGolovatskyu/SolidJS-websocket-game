import { Component, children, Show } from 'solid-js';
import type { JSX } from 'solid-js';
import { Portal } from 'solid-js/web';
import { CenteredBlock } from '../StyledComponents/Blocks';

import { Motion, VariantDefinition } from '@motionone/solid';

import { WindowEventListener } from '@solid-primitives/event-listener';

import { Presence } from '@motionone/solid';

import style from './Modal.module.scss';
import useWindowSize from 'src/hooks/useWindowSize';

interface CustomEvent extends MouseEvent {
  path?: Object[];
}

interface ModalProps {
  close: () => void;
  isOpened: () => boolean;
  children?: JSX.Element;
  animate?: VariantDefinition;
  initial?: VariantDefinition;
  exit?: VariantDefinition;
  duration?: number;
  modalWidth?: string;
  modalHeight?: string;
  modalOffset?: string;
}

const Modal: Component<ModalProps> = (props) => {
  const windowSize = useWindowSize();
  const child = children(() => props.children);
  const onHtmlElementClick = (event: MouseEvent) => {
    if (props.isOpened()) {
      const customEvent = event as CustomEvent;
      const isOutsideClick = !customEvent?.path?.includes(modalRef);

      isOutsideClick && props.close();
    }
  };
  let modalRef: HTMLDivElement | any;

  const animateDiv = props.animate || {
    opacity: [0, 1],
    x: 0,
    y: [100, 50, 0, -50, 0],
  };

  const initialBlock = props.initial || {
    opacity: 0,
    x: 0,
  };

  const exitFromBlock = props.exit || {
    opacity: [1, 0],
    y: [0, -50, 0, 50, 100],
    x: 0,
  };

  const transition = props.duration || 1;

  return (
    <>
      <WindowEventListener onMousedown={onHtmlElementClick} />
      <CenteredBlock
        padding="10px"
        width={`${windowSize().innerWidth}px`}
      >
        <Presence exitBeforeEnter>
          <Show when={props.isOpened()}>
            <Motion.div
              ref={modalRef}
              style={{
                padding: props.modalOffset || '0',
                width:
                  props.modalWidth ||
                  `${windowSize().innerWidth - 20}px`,
                height: props.modalHeight || `100px`,
              }}
              class={style.modal__block}
              animate={animateDiv}
              initial={initialBlock}
              exit={exitFromBlock}
              transition={{
                duration: transition,
                easing: 'ease-in-out',
              }}
            >
              test ahahahahaah
              {child()}
            </Motion.div>
          </Show>
        </Presence>
      </CenteredBlock>
    </>
  );
};

export default Modal;
