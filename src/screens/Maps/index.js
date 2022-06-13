import React, { useEffect, useState } from "react";
import { Dimensions, Alert } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";

import { googleApi } from "~/utils/mocks/google_key_mocks.json";

import * as S from "./styled";

const Maps = ({ route }) => {
  const initialPosition = {
    latitude: route?.params.rota.origem[0],
    longitude: route?.params.rota.origem[1],
  };
  const destinationPosition = {
    latitude: route?.params.rota.destino[0],
    longitude: route?.params.rota.destino[1],
  };
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestBackgroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Ops!",
          "Precisamos de sua permissão para obter a localização"
        );
        return;
      } else {
        const location = await Location.getCurrentPositionAsync();

        const { latitude, longitude } = location.coords;

        setInitialPosition([latitude, longitude]);
      }
    }
    loadPosition();
  }, []);

  return (
    <S.Container>
      <MapView
        style={{
          width: Dimensions?.get("window").width,
          height: Dimensions?.get("window").height,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        loadingEnabled={initialPosition.latitude == 0}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker coordinate={initialPosition} />
        <Marker coordinate={destinationPosition} />
        <MapViewDirections
          origin={initialPosition}
          destination={destinationPosition}
          apikey={googleApi}
          strokeWidth={3}
          onReady={(result) => {
            setDistance(result.distance);
          }}
        />
      </MapView>
    </S.Container>
  );
};

export default Maps;
