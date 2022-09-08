import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/NavitagionSlice";
import { useNavigation } from "@react-navigation/native";
// @ts-ignore
import { GOOGLE_MAPS_APIKEY } from "@env";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`ml-5 py-5 text-xl`}> Book your drive</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}></View>
      <View>
        <GooglePlacesAutocomplete
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details?.geometry.location,
                description: data.description,
              })
            );
            // @ts-ignore
            navigation.navigate("RideOptionsCard");
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          placeholder="Where To?"
          nearbyPlacesAPI="GooglePlacesSearch"
          styles={toInputBoxStyles}
          fetchDetails={true}
          // @ts-ignore
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          debounce={400}
        />

        <NavFavourites />
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
          // @ts-ignore
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon
            name="car"
            type="font-awesome"
            color="white"
            size={16}
            tvParallaxProperties={undefined}
          />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
            tvParallaxProperties={undefined}
          />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "white",
    paddingTop: 20,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    fontSize: 18,
    borderRadius: 0,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
