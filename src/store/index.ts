import { configureStore } from '@reduxjs/toolkit';

import saveToLocalStorageMiddleware from './middleware/saveToLocalStorage';
import { getFromStorageAndSetInRedux } from 'src/hooks/useReduxLocalStorage';

import userReducer from './reducers/user';
import chatReducer from './reducers/chat';

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// We're just calling this function for filling data which saved in localStorage
// Also the main thing, we should call this function after initializing redux store
getFromStorageAndSetInRedux();
