import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { HStack, VStack, Avatar, Flex } from "native-base";
import { Colors } from "../../theme/colors";
import { useNavigation } from "@react-navigation/core";
import { ScreenName } from "../../routes/modules/ScreenName";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL_IMAGE } from "../../constants";
import { getListUserMessage } from "../../helper/modules/message";
import { getUsername } from "../../utils/storage";
import { setListUserMessage } from "../../redux/modules/message";

const { width, height } = Dimensions.get("window");

export default function Message() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const listUserMessage = useSelector((state) => state.message.listUserMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefreshUserMessage = async () => {
    setRefreshing(true);
    const useName = await getUsername();
    await getListUserMessage(useName)
      .then((res) => {
        if (res.success) {
          dispatch(setListUserMessage(res.data));
          setRefreshing(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const renderItemMessage = (item) => {
    const { firstName, lastName, image, username, lastMessage } = item;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ScreenName.sendMessage, {
            name: `${firstName} ${lastName}`,
            toUser: username,
            image: image,
          })
        }
      >
        <HStack space={3} marginBottom={6} alignItems={"center"}>
          <Avatar
            size="lg"
            bg="green.500"
            source={
              image
                ? { uri: BASE_URL_IMAGE + `${image}` }
                : require("../../assets/images/happy.png")
            }
          >
            Avatar
          </Avatar>
          <VStack space={1}>
            <HStack
              // backgroundColor={"black"}
              w={width - 120}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {firstName + " " + lastName}
              </Text>
              <Text style={{ color: Colors.gray }}>11:11 PM</Text>
            </HStack>
            <Text style={{ fontSize: 14 }}>{lastMessage}</Text>
          </VStack>
        </HStack>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {listUserMessage ? (
        <FlatList
          refreshing={refreshing}
          onRefresh={handleRefreshUserMessage}
          data={listUserMessage}
          renderItem={({ item }) => renderItemMessage(item)}
          keyExtractor={(item) => item}
        />
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: width,
  },
});
