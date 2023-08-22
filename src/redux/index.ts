import {configureStore} from '@reduxjs/toolkit';
import user from './modules/user';
import authV1 from './modules/auth';
import message from './modules/message';

export default configureStore({
  reducer: {
    user: user,
    authV1: authV1,
    message: message,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
