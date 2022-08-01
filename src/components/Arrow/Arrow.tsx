import { ArrowDirections } from './models';
import styles from './arrow.module.scss';

interface ArrowProps {
  direction: ArrowDirections;
  onClick?: () => void;
}

export const Arrow = ({ direction, onClick }: ArrowProps) => {
  return (
    <div class={styles.container} onClick={onClick}>
      <i class={`${styles.arrow} ${styles[direction]}`}></i>
    </div>
  );
};
