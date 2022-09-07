import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { data } from "../helpers/data";
import tw from "tailwind-react-native-classnames";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/NavitagionSlice";
import { Origin } from "../helpers/types";

const NavOptions = () => {
  const navigation = useNavigation();
  const origin: Origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`
        p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40
        `}
          // @ts-ignore
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View style={tw`${!origin ? "opacity-20" : ""}`}>
            <Image source={{ uri: item.image }} style={styles.images} />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  images: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});
