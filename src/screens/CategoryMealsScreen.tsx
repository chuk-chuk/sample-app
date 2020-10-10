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

export default function CategoryMealsScreen() {
  const { navigate } = useNavigation()

  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Button
        title="See Details"
        onPress={() => navigate(RouteName.MealDetail)}
      />
    </View>
  )
}
