import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { MESSAGE_TYPE } from "@ts/common";

export type MessageEntriesType = {
  text: string;
  messageType: MESSAGE_TYPE;
};

export interface MessagesState {
  messages: MessageEntriesType[];
}

const initialState: MessagesState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, { payload }: { payload: MessageEntriesType }) => {
      state.messages.push(payload);
    },

    updateMessage: ({ messages }, { payload }: { payload: string }) => {
      const message_id = messages.length - 1;

      if (!message_id) {
        messages.push({
          text: payload,
          messageType: MESSAGE_TYPE.RESPONSE,
        });

        return;
      }

      messages[message_id].text += payload;
    },
  },
});

export const { addMessage, updateMessage } = messagesSlice.actions;

export const selectMessage = (state: RootState) => state.messages.messages;

export default messagesSlice.reducer;
