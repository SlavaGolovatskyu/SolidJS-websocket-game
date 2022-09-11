import { createSignal, onCleanup, onMount } from 'solid-js';

interface WindowSize {
  innerWidth: number;
  innerHeight: number;
}

export const getWindowSize = (): WindowSize => {
  const { innerWidth, innerHeight } = window;

  return { innerWidth, innerHeight };
};

const useWindowSize = (): (() => WindowSize) => {
  const [windowSize, setWindowSize] = createSignal<WindowSize>(
    getWindowSize(),
  );

  const handleWindowResize = () => setWindowSize(getWindowSize());

  onMount(() => {
    window.addEventListener('resize', handleWindowResize);
  });

  onCleanup(() => {
    window.removeEventListener('resize', handleWindowResize);
  });

  return windowSize;
};

export default useWindowSize;
