import React from "react";
import { SafeAreaView, Text, View, Image, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          debounce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
