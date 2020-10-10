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

export default function CategoriesScreen() {
  const { navigate } = useNavigation()

  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title="Go to Meals"
        onPress={() => navigate(RouteName.CategoryMeals)}
      />
    </View>
  )
}
