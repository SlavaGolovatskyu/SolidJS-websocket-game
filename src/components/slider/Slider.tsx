import {
  createSignal,
  createEffect,
  batch,
  Show,
  createMemo,
} from 'solid-js';
import { Rerun } from '@solid-primitives/keyed';

import { Presence } from '@motionone/solid';

import { Arrow } from '../Arrow/Arrow';
import { ArrowDirections } from '../Arrow/models';
import { CheckBoxCircle } from './components/circle';
import { SliderCard } from './components/slider-card';

import { SliderItem, SliderType } from './models/models';

import styles from './slider.module.scss';

enum Directions {
  RIGHT = 'right',
  LEFT = 'left',
}

type SliderProps = {
  sliderType?: SliderType;
  transition?: number;
  elements: SliderItem[];
};

export const Slider = (props: SliderProps) => {
  const [currentSlideIdx, setCurrentSlideIdx] = createSignal<number>(0);
  const [isShow, setIsShow] = createSignal<boolean>(true);
  const [isCanSwipeToTheNext, setIsCanSwipeToTheNext] =
    createSignal<boolean>(true);
  const [currentDirection, setCurrentDirection] =
    createSignal<Directions | null>(null);

  const isCurrentDirectionLeft = createMemo(() => {
    return currentDirection() === Directions.LEFT;
  });

  const sliderType = props.sliderType || SliderType.BETWEEN;
  const transition = props.transition || 500;
  const xRange = 100;

  const timeTransitionForCloseAndOpen = transition * 2;
  const toPercentage = 1000;
  const animateTransition = transition / toPercentage;

  const hideSlide = () => {
    setIsShow(false);
    setIsCanSwipeToTheNext(false);
  };

  const onLeftArrow = () => {
    if (!isCanSwipeToTheNext()) return;

    batch(() => {
      if (currentSlideIdx() === 0) {
        setCurrentSlideIdx(props.elements.length - 1);
      } else {
        setCurrentSlideIdx(currentSlideIdx() - 1);
      }

      setCurrentDirection(Directions.LEFT);
      hideSlide();
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

      setCurrentDirection(Directions.RIGHT);
      hideSlide();
    });
  };

  const onChangeNumberOfSlider = (index: number) => {
    if (!isCanSwipeToTheNext()) return;
    if (index === currentSlideIdx()) return;
    if (sliderType === SliderType.BETWEEN) {
      setCurrentDirection(currentSlideIdx() < index ? Directions.RIGHT : Directions.LEFT);
    }

    batch(() => {
      setCurrentSlideIdx(index);
      hideSlide();
    });
  };

  createEffect(() => {
    if (!isShow()) {
      setTimeout(() => setIsShow(true), transition);
      setTimeout(
        () => setIsCanSwipeToTheNext(true),
        timeTransitionForCloseAndOpen,
      );
    }
  });

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
      <Show when={sliderType === SliderType.CLOSE_AND_OPEN}>
        <Presence exitBeforeEnter>
          <Show when={isShow()}>
            <SliderCard
              slideData={props.elements[currentSlideIdx()]}
              duration={animateTransition}
            />
          </Show>
        </Presence>
      </Show>
      <Show when={sliderType === SliderType.BETWEEN}>
        <Presence exitBeforeEnter>
          <Show when={isShow()}>
            <Rerun on={isCurrentDirectionLeft()}>
              <SliderCard
                slideData={props.elements[currentSlideIdx()]}
                duration={animateTransition}
                initial={{
                  opacity: 0,
                  x:
                    isCurrentDirectionLeft()
                      ? -xRange
                      : xRange,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x:
                    isCurrentDirectionLeft()
                      ? xRange
                      : -xRange,
                }}
              />
            </Rerun>
          </Show>
        </Presence>
      </Show>
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
