import Toast from 'react-native-toast-message';

export const showToastSuccess = (message: string) => {
  Toast.show({
    type: 'success',
    text1: 'Success',
    text2: message,
  });
};

export const showToastError = (message: string) => {
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: message,
  });
};
