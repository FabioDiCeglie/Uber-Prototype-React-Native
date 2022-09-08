import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const dummyData = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "Amsterdam, Netherlands",
  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    destination: "Rotterdam, Netherlands",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={dummyData}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            name={icon}
            type="ionicon"
            color="white"
            size={18}
            style={tw`mr-4 rounded-full bg-gray-500 p-3`}
            tvParallaxProperties={undefined}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
