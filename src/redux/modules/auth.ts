import {createSlice} from '@reduxjs/toolkit';

export const authV1 = createSlice({
  name: 'authV1',
  initialState: {
    auth: false,
    username: '',
  },
  reducers: {
    setAuth(state, action) {
      state.auth = action.payload;
    },
    setUserNameLogin(state, action) {
      state.username = action.payload;
    },
  },
});

export const {setAuth, setUserNameLogin} = authV1.actions;
export default authV1.reducer;
