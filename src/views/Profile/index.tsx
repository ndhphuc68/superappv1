/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/colors';
import {Avatar, Button, HStack, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/core';
import {ScreenName} from '../../routes/modules/ScreenName';

const {width, height} = Dimensions.get('window');

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
          height: height / 2,
          backgroundColor: '#00A7DB',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <VStack space={3} justifyContent={'center'} alignItems={'center'}>
          <Avatar
            borderColor={Colors.white}
            borderWidth={5}
            size="180px"
            bg="green.500"
            source={require('../../assets/images/happy.png')}>
            Avatar
          </Avatar>
          <Text style={{fontWeight: '600', fontSize: 20, color: Colors.white}}>
            Nguyen Dang Hoang Phuc
          </Text>
        </VStack>
      </View>
      <View
        style={[
          {
            position: 'absolute',
            top: height / 2 - 50,
            margin: 'auto',
            right: 0,
            left: 0,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <View
          style={{
            width: width - 60,
          }}>
          <VStack
            style={[
              styles.elevation,
              {
                backgroundColor: Colors.white,
                borderRadius: 10,
                padding: 18,
              },
            ]}
            space={4}>
            <HStack
              borderBottomWidth={1}
              borderColor={Colors.gray}
              justifyContent={'space-between'}
              paddingBottom={2}>
              <Text style={{fontSize: 18, color: Colors.gray}}>Username</Text>
              <Text style={{fontSize: 18}}>ndhphuc</Text>
            </HStack>
            <HStack
              borderBottomWidth={1}
              borderColor={Colors.gray}
              justifyContent={'space-between'}
              paddingBottom={2}>
              <Text style={{fontSize: 18, color: Colors.gray}}>Phone</Text>
              <Text style={{fontSize: 18}}>0327304090</Text>
            </HStack>
            <HStack
              borderBottomWidth={1}
              borderColor={Colors.gray}
              justifyContent={'space-between'}
              paddingBottom={2}>
              <Text style={{fontSize: 18, color: Colors.gray}}>Gender</Text>
              <Text style={{fontSize: 18}}>Nam</Text>
            </HStack>
            <HStack
              borderBottomWidth={1}
              borderColor={Colors.gray}
              justifyContent={'space-between'}
              paddingBottom={2}>
              <Text style={{fontSize: 18, color: Colors.gray}}>Address</Text>
              <Text style={{fontSize: 18}}>123 Nui Thanh</Text>
            </HStack>
            <HStack
              borderBottomWidth={1}
              borderColor={Colors.gray}
              justifyContent={'space-between'}
              paddingBottom={2}>
              <Text style={{fontSize: 18, color: Colors.gray}}>Email</Text>
              <Text style={{fontSize: 18}}>gido@gmail.com</Text>
            </HStack>
            <HStack justifyContent={'space-between'} paddingBottom={2}>
              <Text style={{fontSize: 18, color: Colors.gray}}>Website</Text>
              <Text style={{fontSize: 18}}>123.com</Text>
            </HStack>
          </VStack>

          <Button
            onPress={() => navigation.navigate(ScreenName.editProfile)}
            style={styles.elevation}
            backgroundColor={'#00A7DB'}
            marginTop={5}>
            Edit Profile
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
});
