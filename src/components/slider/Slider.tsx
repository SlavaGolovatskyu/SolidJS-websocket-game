import { createSignal, createEffect, batch, Show } from 'solid-js';

import { Motion, Presence } from '@motionone/solid';

import { Arrow } from '../Arrow/Arrow';
import { ArrowDirections } from '../Arrow/models';
import { CheckBoxCircle } from './components/circle';

import styles from './slider.module.scss';

type SliderItem = {
  title: string;
  subtitle: string;
  text: string;
};

type SliderProps = {
  transition?: number;
  elements: SliderItem[];
};

export const Slider = (props: SliderProps) => {
  const [currentSlideIdx, setCurrentSlideIdx] = createSignal<number>(0);
  const [isShow, setIsShow] = createSignal<boolean>(true);
  const [isCanSwipeToTheNext, setIsCanSwipeToTheNext] =
    createSignal<boolean>(true);

  const transition = props.transition || 500;

  const transitionToPercentage = () => {
    const toPercentage = 1000;
    const animateTransition = transition / toPercentage;

    return animateTransition;
  };

  createEffect(() => {
    if (!isShow()) {
      setTimeout(() => setIsShow(true), transition);
      setTimeout(() => setIsCanSwipeToTheNext(true), transition * 2);
    }
  });

  const onLeftArrow = () => {
    if (!isCanSwipeToTheNext()) return;

    batch(() => {
      if (currentSlideIdx() === 0) {
        setCurrentSlideIdx(props.elements.length - 1);
      } else {
        setCurrentSlideIdx(currentSlideIdx() - 1);
      }

      setIsShow(false);
      setIsCanSwipeToTheNext(false);
    });
  };

  const onRightArrow = () => {
    if (!isCanSwipeToTheNext()) return;

    batch(() => {
      if (currentSlideIdx() === props.elements.length - 1) {
        setCurrentSlideIdx(0);
      } else {
        setCurrentSlideIdx(currentSlideIdx() + 1);
      }

      setIsShow(false);
      setIsCanSwipeToTheNext(false);
    });
  };

  const onChangeNumberOfSlider = (index: number) => {
    if (!isCanSwipeToTheNext()) return;
    if (index === currentSlideIdx()) return;

    batch(() => {
      setCurrentSlideIdx(index);
      setIsShow(false);
      setIsCanSwipeToTheNext(false);
    });
  };

  return (
    <div class={styles.container}>
      <Show when={props.elements.length > 1}>
        <div class={styles.left_arrow}>
          <Arrow
            direction={ArrowDirections.LEFT}
            onClick={onLeftArrow}
          />
        </div>
        <div class={styles.right_arrow}>
          <Arrow
            direction={ArrowDirections.RIGHT}
            onClick={onRightArrow}
          />
        </div>
      </Show>
      <Presence exitBeforeEnter>
        <Show when={isShow()}>
          <Motion.div
            animate={{ opacity: [0, 1], scale: [0, 1] }}
            class={styles.content}
            transition={{
              duration: transitionToPercentage(),
              easing: 'ease-in-out',
            }}
            exit={{ opacity: [1, 0], scale: [1, 0] }}>
            <div class={styles.content__title}>
              {props.elements[currentSlideIdx()]?.title}
            </div>
            <div class={styles.content__subtitle}>
              {props.elements[currentSlideIdx()]?.subtitle}
            </div>
            <div class={styles.content__text}>
              {props.elements[currentSlideIdx()]?.text}
            </div>
          </Motion.div>
        </Show>
      </Presence>
      <div class={styles.count_of_items}>
        {props.elements.map((_, index) => {
          const isSelected = currentSlideIdx() === index;

          return (
            <CheckBoxCircle
              checked={isSelected}
              onClick={() => onChangeNumberOfSlider(index)}
            />
          );
        })}
      </div>
    </div>
  );
};
