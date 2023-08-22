import {Image, StyleSheet, Text, View, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../theme/image';
import {VStack, Input, Icon, Pressable, Button} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../theme/colors';
import {useDispatch} from 'react-redux';
// import {setAuth, setUserNameLogin} from '../../redux/modules/auth';
import {useNavigation} from '@react-navigation/core';
// import {ScreenName} from '../../routes/modules/ScreenName';
// import messaging from '@react-native-firebase/messaging';
// import {loginApi} from '../../helper/modules/auth';
// import {useMutation} from '@tanstack/react-query';
// import {saveToken, saveUsername} from '../../utils/storage';
// import {showToastError} from '../../utils/toast';
import {useTranslation} from 'react-i18next';
// import {getInfoApi} from '../../helper/modules/user';
// import {setInfoUser} from '../../redux/modules/user';
import {useAuth} from '../../contexts/Auth';
export default function LoginView() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const auth = useAuth();

  const [show, setShow] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    Keyboard.dismiss();
    setIsLoading(false);
    if (username && password) {
      const tokenFM = await messaging().getToken();
      console.log('tokenFM', tokenFM);
      await auth.signIn({username, password, token: tokenFM});
      // loginAction({username, password, token: tokenFM});
    } else {
      // if (!username) {
      //   showToastError(data.message);
      // }
    }
  };

  // const {mutate: loginAction} = useMutation({
  //   mutationFn: data => loginApi(data),
  //   onSuccess: async res => {
  //     const {data} = res;
  //     if (data.success) {
  //       await getInfoApi(username)
  //         .then(res => {
  //           if (res.success) {
  //             dispatch(setInfoUser(res.data));
  //           }
  //         })
  //         .catch(e => {
  //           console.log(e);
  //         });
  //       await saveToken(data.data.token);
  //       await saveUsername(username);
  //       dispatch(setAuth(true));
  //       dispatch(setUserNameLogin(data.data.username));
  //       navigation.navigate(ScreenName.bottomtab);
  //     } else {
  //       showToastError(data.message);
  //     }
  //   },
  //   onError: error => {
  //     console.log(error);
  //   },
  // });

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLogo}
        source={Images.dog}
        resizeMode="contain"
      />
      <VStack marginTop={8} space={8} width={'100%'}>
        <Input
          focusOutlineColor={Colors.neutral60}
          size="xl"
          variant="underlined"
          placeholder={t('username')}
          placeholderTextColor={Colors.black}
          style={{fontWeight: 'bold'}}
          value={username}
          onChangeText={setUsername}
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={Colors.black}
          style={{fontWeight: 'bold'}}
          focusOutlineColor={Colors.neutral60}
          size="xl"
          variant="underlined"
          placeholder={t('password')}
          type={show ? 'text' : 'password'}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? 'visibility' : 'visibility-off'}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
        />
        <Button
          isLoading={isLoading}
          onPress={handleLogin}
          height={60}
          style={{backgroundColor: Colors.blue}}>
          <Text style={{fontWeight: 'bold', color: Colors.white, fontSize: 18}}>
            {t('login')}
          </Text>
        </Button>
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  imageLogo: {
    height: 250,
    width: 250,
  },
});
