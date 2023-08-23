import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginView from '../views/Login';
import {ScreenName} from './modules/ScreenName';
import Tabbar from './modules/BottomTabNavigator';
import EditProfile from '../views/Profile/EditProfile';
import Message from '../views/Message';
import SendMessage from '../views/Message/SendMessage';
import {getToken, getUsername} from '../utils/storage';
import SplashScreen from '../views/SplashScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getIsLogin = async () => {
    const token = await getToken();
    const username = await getUsername();
    if (token && username) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getIsLogin();
  }, []);

  const callbackFunctionLogin = (chilData: boolean) => {
    setIsLogin(chilData);
  };

  if (isLoading) {
    return <SplashScreen />;
  } else if (isLogin) {
    return (
      <NavigationContainer>
        <LoginView parentCallback={callbackFunctionLogin} />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={ScreenName.bottomtab}
            component={Tabbar}
          />
          <Stack.Screen
            options={{headerShown: true}}
            component={EditProfile}
            name={ScreenName.editProfile}
          />
          <Stack.Screen
            options={{headerShown: true}}
            component={Message}
            name={ScreenName.message}
          />
          <Stack.Screen
            options={({route}) => ({
              title: route.params.name,
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            })}
            component={SendMessage}
            name={ScreenName.sendMessage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
