import React from "react";

import { ApiProvider } from "~/contexts/ApiContext";

import {
  useFonts,
  NunitoSans_600SemiBold,
  NunitoSans_800ExtraBold,
} from "@expo-google-fonts/nunito-sans";

import { ThemeProvider } from "styled-components";

import AppLoading from "expo-app-loading";

import Routes from "~/routes";
import { theme } from "~/utils/styles/theme";

const App = () => {
  const [fontsLoaded] = useFonts({
    NunitoSans_600SemiBold,
    NunitoSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <ApiProvider>
        <Routes />
      </ApiProvider>
    </ThemeProvider>
  );
};

export default App;
