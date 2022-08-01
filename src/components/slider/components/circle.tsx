import { nanoid } from 'nanoid';
import styles from './circle.module.scss';

type CheckBoxCircleProps = {
  checked: boolean;
  onClick?: () => void;
};

export const CheckBoxCircle = ({
  checked,
  onClick,
}: CheckBoxCircleProps) => {
  return (
    <div
      class={`${styles.custom_checkbox} ${
        checked ? styles.active : ''
      }`}
      onClick={onClick}></div>
  );
};
