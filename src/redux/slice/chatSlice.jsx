import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_MESSAGE_COUNT } from "../../utils/constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // Remove 1 message from the top when the message length of LIVE_CHAT_MESSAGE_COUNT is increase
      state.messages.splice(LIVE_CHAT_MESSAGE_COUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
