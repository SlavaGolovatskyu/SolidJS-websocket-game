import { onCleanup, createSignal } from 'solid-js';
import equal from 'fast-deep-equal';

import store from '../store';
import type { RootState, AppDispatch } from '../store';

const useStore = <S = any>(
  select: (state: RootState) => unknown,
  equality: boolean = true,
) => {
  const [selected, setSelected] = createSignal(
    select(store.getState()),
  );

  const unsubscribe = store.subscribe(() => {
    const updateSelected = select(store.getState());

    if (!equality) {
      setSelected(updateSelected);
    }

    if (equality && !equal(selected(), updateSelected)) {
      setSelected(updateSelected);
    }
  });

  onCleanup(() => unsubscribe());

  return [selected, store.dispatch] as [() => S, AppDispatch];
};

export default useStore;
