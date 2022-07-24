import logo from './logo.svg';
import styles from './App.module.css';
import useStore from './hooks/useStore';
import { increment, decrement } from './store/reducers/counter';

const App = () => {
  const [counter, dispatch] = useStore((state) => state.counter.value);

  return (
    <div class={styles.App}>
      <button onClick={() => dispatch(increment())}>
        add {counter()}
      </button>
      <button onClick={() => dispatch(decrement())}>
        delete {counter()}
      </button>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer">
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
