import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import chatReducer from './reducers/chat';

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
