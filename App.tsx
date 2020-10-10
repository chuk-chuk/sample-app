import React from "react"
import { AppLoading } from "expo"
import { useFonts } from "expo-font"

import AppContainer from "./src/router"

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
