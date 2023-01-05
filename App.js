import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import { ResturantsScreen } from "./src/screens/resturants.screen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResturantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
