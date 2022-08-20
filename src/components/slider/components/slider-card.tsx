import { Motion } from '@motionone/solid';
import { Component } from 'solid-js';
import { SliderItem } from '../models/models';

import styles from './slider-card.module.scss';

interface SliderDataProps {
  slideData: SliderItem;
  duration: number;
  animate?: any | object;
  exit?: any | object;
  initial?: any | object;
}

export const SliderCard: Component<SliderDataProps> = ({
  slideData,
  duration,
  animate = { opacity: [0, 1], scale: [0, 1] },
  exit = { opacity: [1, 0], scale: [1, 0] },
  initial,
}) => {
  return (
    <Motion.div
      animate={animate}
      class={styles.content}
      transition={{
        duration: duration,
        easing: 'ease-in-out',
      }}
      initial={initial}
      exit={exit}>
      <div class={styles.content__title}>{slideData?.title}</div>
      <div class={styles.content__subtitle}>{slideData?.subtitle}</div>
      <div class={styles.content__text}>{slideData?.text}</div>
    </Motion.div>
  );
};
