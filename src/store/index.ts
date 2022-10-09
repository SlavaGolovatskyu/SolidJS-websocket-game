import { configureStore } from '@reduxjs/toolkit';

import saveToLocalStorageMiddleware from './middleware/saveToLocalStorage';
import createSagaMiddleware from 'redux-saga';

import userReducer from './reducers/user';
import chatReducer from './reducers/chat';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      sagaMiddleware,
      saveToLocalStorageMiddleware,
    ]),
  devTools: import.meta.env.SOLID_NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
