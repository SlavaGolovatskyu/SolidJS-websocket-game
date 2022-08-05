import { Slider } from '../../components/slider/Slider';
import styles from './home.module.scss';

const test = [
  {
    title: 'test some TEXT 11111111',
    subtitle: 'GJDFGHDKHFDJJ GDFJHGKLJDFHKHdsfasdvh h',
    text: 'fhsfhjsahf - 324dfh hfjkhfashfjsdf',
  },
  {
    title: 'test some TEXT 22222222',
    subtitle: 'GJDFGHDKHFDJJ GDFJHGKLJDFHKHdsfasdvh h',
    text: 'fhsfhjsahf - 324dfh hfjkhfashfjsdf',
  },
  {
    title: 'test some TEXT 333333',
    subtitle: 'GJDFGHDKHFDJJ GDFJHGKLJDFHKHdsfasdvh h',
    text: 'fhsfhjsahf - 324dfh hfjkhfashfjsdf',
  },
  {
    title: 'test some TEXT 444444',
    subtitle: 'GJDFGHDKHFDJJ GDFJHGKLJDFHKHdsfasdvh h',
    text: 'fhsfhjsahf - 324dfh hfjkhfashfjsdf',
  },
  {
    title: 'test some TEXT 555555',
    subtitle: 'GJDFGHDKHFDJJ GDFJHGKLJDFHKHdsfasdvh h',
    text: 'fhsfhjsahf - 324dfh hfjkhfashfjsdf',
  },
];

export const HomePage = () => {
  return (
    <div class={styles.container}>
      <Slider elements={test} transition={400} />
    </div>
  );
};
