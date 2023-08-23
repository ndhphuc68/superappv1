/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {HStack, Avatar, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../theme/colors';
import {menu} from './data';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {BASE_URL_IMAGE} from '../../constants';
import {getInfoApi} from '../../helper/modules/user';
import {setInfoUser} from '../../redux/modules/user';
import {getUsername} from '../../utils/storage';
import {getListUserMessage} from '../../helper/modules/message';
import {setListUserMessage} from '../../redux/modules/message';

const {width} = Dimensions.get('window');

export default function HomeView() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const infoUser = useSelector(state => state.user.infoUser);

  useEffect(() => {
    const handleGetListUserMessage = async () => {
      const useName = await getUsername();
      await getListUserMessage(useName)
        .then(res => {
          if (res.success) {
            dispatch(setListUserMessage(res.data));
          }
        })
        .catch(e => {
          console.log(e);
        });
    };
    handleGetListUserMessage();
  }, []);

  const renderHeaderHome = () => {
    return (
      <HStack alignItems={'center'} space={5} marginTop={10}>
        <Avatar
          size="xl"
          bg="green.500"
          source={
            infoUser
              ? {uri: BASE_URL_IMAGE + `${infoUser.image}`}
              : require('../../assets/images/happy.png')
          }>
          Avatar
        </Avatar>
        <VStack space={1}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {infoUser ? `${infoUser.firstName} ${infoUser.lastName}` : ''}
          </Text>
          <HStack alignItems={'center'}>
            <Ionicons name="location-sharp" size={16} color="black" />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: Colors.neutral60,
              }}>
              Da Nang
            </Text>
          </HStack>
        </VStack>
      </HStack>
    );
  };

  const renderBodyHome = () => {
    return (
      <VStack marginTop={8}>
        <Text style={{fontSize: 35, fontWeight: 'bold'}}>Welcome back!</Text>
        <FlatList
          style={{marginVertical: 10}}
          data={menu}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.screen)}
              style={[
                styles.itemMenu,
                styles.elevation,
                {backgroundColor: item.color},
              ]}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {item.icon}
                <Text style={{marginTop: 5}}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
      </VStack>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeaderHome()}
      {renderBodyHome()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  elevation: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  itemMenu: {
    height: (width - 45) / 2,
    flex: 1,
    margin: 5,
  },
});
