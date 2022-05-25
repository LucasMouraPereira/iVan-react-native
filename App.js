import React from "react";
import { ThemeProvider } from "styled-components";

import Routes from "~/routes";
import { theme } from "~/utils/styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
