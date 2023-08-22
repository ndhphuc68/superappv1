import messaging from '@react-native-firebase/messaging';

const getFcmToken = async () => {
  try {
    const newFcmToken = await messaging().getToken();
    console.log(newFcmToken);
    return newFcmToken;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

export {getFcmToken, requestUserPermission};
