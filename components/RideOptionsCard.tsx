import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { dataRide } from "../helpers/data";

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          // @ts-ignore
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon
            tvParallaxProperties={undefined}
            name="chevron-left"
            type="fontawesome"
          />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>

      <FlatList
        data={dataRide}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, image }, item }) => (
          <TouchableOpacity
            style={tw`flex-row items-center justify-between px-10 ${
              // @ts-ignore
              id === selected?.id && "bg-gray-200"
            }`}
            // @ts-ignore
            onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Travel time</Text>
            </View>

            <Text style={tw`text-xl`}>$11</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
