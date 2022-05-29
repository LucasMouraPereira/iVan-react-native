import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GooglePlacesInput = ({ placeholder }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      query={{
        key: process.env.GOOGLE_KEY_PLACES,
        language: "pt-br",
      }}
      enablePoweredByContainer={false}
      fetchDetails={true}
      styles={{
        listView: { 
          height: 100, 
          width: 300 
        },
      }}
    />
  );
};

export default GooglePlacesInput;
