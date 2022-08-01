import { Slider } from '../../components/slider/Slider';
import styles from './home.module.scss';

export const HomePage = () => {
  return (
    <div class={styles.container}>
      <Slider
        elements={[
          { 1: 1 },
          { 2: 2 },
          { 3: 3 },
          { 4: 4 },
          { 5: 5 },
          { 1: 1 },
          { 2: 2 },
          { 3: 3 },
          { 4: 4 },
          { 5: 5 },
        ]}
      />
    </div>
  );
};
