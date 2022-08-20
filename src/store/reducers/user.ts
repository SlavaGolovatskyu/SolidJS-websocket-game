import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  lastRoom: string;
  currentRoom: string;
  isConnected: boolean;
  socketConnection: null;
}

const initialState: UserState = {
  username: '',
  lastRoom: '',
  currentRoom: '',
  isConnected: false,
  socketConnection: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    connectToTheRoom: (state, action: PayloadAction<string>) => {
      state.currentRoom = action.payload;
    },
    changeIsConnectedStatus: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    }
  }
})

export const { changeUsername, connectToTheRoom, changeIsConnectedStatus } = userSlice.actions;

export default userSlice.reducer;