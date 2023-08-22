import {createSlice} from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    listBook: [],
    infoUser: null,
  },
  reducers: {
    setBook(state, action) {
      state.listBook = action.payload;
    },
    setInfoUser(state, action) {
      state.infoUser = action.payload;
    },
  },
});

export const {setBook, setInfoUser} = user.actions;
export default user.reducer;
