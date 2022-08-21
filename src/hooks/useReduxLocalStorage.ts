import store from '../store';
import { actionsState } from '../helpers/persistActions';

export const getFromStorageAndSetInRedux = () => {
  const state = actionsState() || {};

  for (const [key, value] of Object.entries(state)) {
    const item = window.localStorage.getItem(key);
    const parsedItem = item ? JSON.parse(item) : '';

    !!parsedItem && store.dispatch(value(parsedItem));
  }
};
