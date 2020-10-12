import React from "react"
import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default function FavoritesScreen() {
  return (
    <View style={styles.screen}>
      <Text>Fav Screen</Text>
    </View>
  )
}
