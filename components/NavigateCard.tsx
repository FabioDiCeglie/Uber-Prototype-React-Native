import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/NavitagionSlice";
import { useNavigation } from "@react-navigation/native";
// @ts-ignore
import { GOOGLE_MAPS_APIKEY } from "@env";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}> Good morning</Text>
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
