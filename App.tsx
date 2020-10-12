import React from "react"
import { AppLoading } from "expo"
import { useFonts } from "expo-font"
import { enableScreens } from "react-native-screens"

import AppContainer from "./src/router"

enableScreens()

export default function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line global-require
    "FuturaPT-Book": require("./assets/fonts/FuturaPT-Book.ttf"),
    // eslint-disable-next-line global-require
    "FuturaPT-Heavy": require("./assets/fonts/FuturaPT-Heavy.ttf"),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return <AppContainer />
}
