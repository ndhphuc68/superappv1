/* eslint-disable react/react-in-jsx-scope */
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../theme/colors';
import {ScreenName} from '../../routes/modules/ScreenName';

export const menu = [
  {
    title: 'Message',
    icon: <Feather name="message-square" size={50} color={Colors.white} />,
    color: '#33CC33',
    screen: ScreenName.message,
  },
  {
    title: 'Game',
    icon: (
      <Ionicons
        name="md-game-controller-outline"
        size={50}
        color={Colors.white}
      />
    ),
    color: '#FFFF33',
    screen: ScreenName.message,
  },
  {
    title: 'AAAAA',
    icon: (
      <Ionicons
        name="md-game-controller-outline"
        size={50}
        color={Colors.white}
      />
    ),
    color: '#FF9900',
    screen: ScreenName.message,
  },
  {
    title: 'BBBB',
    icon: (
      <Ionicons
        name="md-game-controller-outline"
        size={50}
        color={Colors.white}
      />
    ),
    color: '#FF99CC',
    screen: ScreenName.message,
  },
];
