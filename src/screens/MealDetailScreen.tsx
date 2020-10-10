import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { useNavigation } from "react-navigation-hooks"
import { RouteName } from "../@types"

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default function MealDetailScreen() {
  const { navigate } = useNavigation()
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Button
        title="Back to Main"
        onPress={() => navigate(RouteName.Categories)}
      />
    </View>
  )
}
