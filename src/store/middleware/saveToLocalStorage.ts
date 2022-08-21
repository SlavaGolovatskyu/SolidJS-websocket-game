import { Middleware } from '@reduxjs/toolkit';

import { actionsState } from 'src/helpers/persistActions';

const saveToLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const stateOfActions = actionsState();

    if (stateOfActions !== null && stateOfActions[action.type]) {
      window.localStorage.setItem(
        action.type,
        JSON.stringify(action.payload),
      );
    }

    next(action);
  };

export default saveToLocalStorageMiddleware;
