import {createSlice} from '@reduxjs/toolkit';

export const message = createSlice({
  name: 'message',
  initialState: {
    listUserMessage: [],
  },
  reducers: {
    setListUserMessage(state, action) {
      state.listUserMessage = action.payload;
    },
  },
});

export const {setListUserMessage} = message.actions;
export default message.reducer;
