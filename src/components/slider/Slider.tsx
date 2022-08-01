import { createSignal, createEffect } from 'solid-js';

import { Arrow } from '../Arrow/Arrow';
import { ArrowDirections } from '../Arrow/models';
import { CheckBoxCircle } from './components/circle';

import styles from './slider.module.scss';

type SliderProps = {
  elements: {}[];
};

export const Slider = (props: SliderProps) => {
  const [currentSlideIdx, setCurrentSlideIdx] = createSignal<number>(0);

  const onLeftArrow = () => {
    if (currentSlideIdx() === 0) {
      setCurrentSlideIdx(props.elements.length - 1);
    } else {
      setCurrentSlideIdx(currentSlideIdx() - 1);
    }
  };

  const onRightArrow = () => {
    if (currentSlideIdx() === props.elements.length - 1) {
      setCurrentSlideIdx(0);
    } else {
      setCurrentSlideIdx(currentSlideIdx() + 1);
    }
  };

  return (
    <div class={styles.container}>
      <div class={styles.left_arrow}>
        <Arrow direction={ArrowDirections.LEFT} onClick={onLeftArrow} />
      </div>
      <div class={styles.right_arrow}>
        <Arrow
          direction={ArrowDirections.RIGHT}
          onClick={onRightArrow}
        />
      </div>
      <div class={styles.content}>
        <div class={styles.content__title}>MAIN CONTENT</div>
        <div class={styles.content__subtitle}>
          MAIN CONTENT SUBTITLE
        </div>
        <div class={styles.content__text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Omnis mollitia maxime deleniti? Non iste omnis blanditiis,
          dignissimos atque aliquid exercitationem quisquam sed facere
          velit! Obcaecati facere delectus suscipit numquam at?
        </div>
      </div>
      <div class={styles.count_of_items}>
        {props.elements.map((_, index) => {
          const isSelected = currentSlideIdx() === index;

          return (
            <CheckBoxCircle
              checked={isSelected}
              onClick={() => setCurrentSlideIdx(index)}
            />
          );
        })}
      </div>
    </div>
  );
};
