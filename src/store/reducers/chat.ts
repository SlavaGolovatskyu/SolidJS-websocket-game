import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum ChatStages {
  USERNAME = 'username',
  CHOOSE_ROOM = 'choose-room',
  ROOM = 'room',
}

interface RoomState {
  currentStage: ChatStages;
  roomId: string;
  messages: string[];
  members: string[];
}

const initialState: RoomState = {
  currentStage: ChatStages.USERNAME,
  roomId: '',
  messages: [],
  members: [],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    changeCurrentStage: (state, action: PayloadAction<ChatStages>) => {
      state.currentStage = action.payload;
    },
    changeRoomId: (state, action: PayloadAction<string>) => {
      state.roomId = action.payload;
    }
  }
})

export const { changeRoomId, changeCurrentStage } = chatSlice.actions;

export default chatSlice.reducer;