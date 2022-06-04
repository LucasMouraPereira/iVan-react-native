import React from "react";

import { ScrollView } from "react-native";

import { googleApi } from "~/utils/mocks/google_key_mocks.json";

import { useApiContext } from "~/contexts/ApiContext";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GooglePlacesInput = ({ placeholder, isOrigin }) => {
  const { setOrigin, setDestination } = useApiContext();

  return (

      <GooglePlacesAutocomplete
        placeholder={placeholder}
        minLength={2}
        fetchDetails={true}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          isOrigin
            ? setOrigin([
                details.geometry.location.lat,
                details.geometry.location.lng,
              ])
            : setDestination([
                details.geometry.location.lat,
                details.geometry.location.lng,
              ]);
        }}
        query={{
          key: googleApi,
          language: "en",
        }}
        styles={{
          textInputContainer: {
            backgroundColor: "rgba(0,0,0,0)",
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 48,
            color: "#5d5d5d",
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: "#000",
          },
          listView: {
            height: 300,
          },
        }}
      />
  );
};

export default GooglePlacesInput;
