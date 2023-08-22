import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToken = async (value: string) => {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (error) {}
};

export const saveUsername = async (value: string) => {
  try {
    await AsyncStorage.setItem('username', value);
  } catch (error) {}
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      return value.toString();
    } else {
      return null;
    }
  } catch (e) {
    // error reading value
  }
};

export const getUsername = async () => {
  try {
    const value = await AsyncStorage.getItem('username');
    if (value !== null) {
      return value.toString();
    } else {
      return null;
    }
  } catch (e) {
    // error reading value
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (e) {
    // error reading value
  }
};

export const removeUserName = async () => {
  try {
    await AsyncStorage.removeItem('username');
  } catch (e) {
    // error reading value
  }
};
