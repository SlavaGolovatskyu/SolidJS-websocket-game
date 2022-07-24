import { onCleanup, createSignal } from 'solid-js';
import equal from 'fast-deep-equal';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const useStore = (
  select: (state: RootState) => unknown,
  equality: boolean = true,
): any[] => {
  const [selected, setSelected] = createSignal(select(store.getState()));

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

  return [selected, store.dispatch];
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
