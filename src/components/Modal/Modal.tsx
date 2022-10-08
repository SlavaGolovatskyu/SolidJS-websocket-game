import { Component, children, Show } from 'solid-js';
import type { JSX } from 'solid-js';

import { styled } from 'solid-styled-components';

import { Motion, VariantDefinition } from '@motionone/solid';

import { WindowEventListener } from '@solid-primitives/event-listener';

import { Presence } from '@motionone/solid';

import style from './Modal.module.scss';

interface MouseEventWithPath extends MouseEvent {
  path?: Object[];
}

interface ModalProps {
  close: () => void;
  isOpened: () => boolean;
  children: JSX.Element;
  animate?: VariantDefinition;
  initial?: VariantDefinition;
  exit?: VariantDefinition;
  duration?: number;
  /**
   * {Boolean} variable that triggered on action
   * Default `true`
   * If `true` and user clicked outside of the modal window it will close modal window
   * If `false` and user clicked outside nothing will happen
   */
  isOnOutsideCloseWindow?: boolean;
  // CSS styles
  styles?: Object;
  /**
   * {Boolean} variable mean when show icon that will close modal
   * default `false` - hidden
   */
  withCloseIcon?: boolean;
}

const Modal: Component<ModalProps> = (props) => {
  const isOnOutsideCloseWindow = props.isOnOutsideCloseWindow || true;
  const child = children(() => props.children);

  const onMouseDown = (event: MouseEvent) => {
    if (props.isOpened()) {
      const customEvent = event as MouseEventWithPath;
      const isOutsideClick = !customEvent?.path?.includes(modalRef);

      isOutsideClick && props.close();
    }
  };

  let modalRef: HTMLDivElement | any;

  const animateDiv = props.animate || {
    opacity: [0, 1],
    x: 0,
    y: 0,
  };

  const initialBlock = props.initial || {
    opacity: 0,
    y: 300,
  };

  const exitFromBlock = props.exit || {
    opacity: [1, 0],
    y: 300,
    x: 0,
  };

  const transition = props.duration || 1;

  return (
    <>
      {isOnOutsideCloseWindow && (
        <WindowEventListener onMousedown={onMouseDown} />
      )}
      <Presence exitBeforeEnter>
        <Show when={props.isOpened()}>
          <Motion.div
            ref={modalRef}
            class={style.modal__block}
            style={props.styles}
            animate={animateDiv}
            initial={initialBlock}
            exit={exitFromBlock}
            transition={{
              duration: transition,
              easing: 'ease-in-out',
            }}
          >
            {props.withCloseIcon && (
              <CloseButton onClick={props.close}>X</CloseButton>
            )}
            {child()}
          </Motion.div>
        </Show>
      </Presence>
      <Show when={props.isOpened()}>
        <div>
          <div class={style.backdrop}></div>
        </div>
      </Show>
    </>
  );
};

const CloseButton = styled.label`
  transform: rotate(270deg);
  position: absolute;
  color: black;
  cursor: pointer;
  font-size: 24px;
  width: 30px;
  height: 30px;
  top: 0;
  right: 0;
  margin: 8px 10px 0 0;
  text-align: center;

  &:hover {
    filter: brightness(0.5);
  }
`;

export default Modal;
