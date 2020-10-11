import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { useNavigation, useNavigationParam } from "react-navigation-hooks"

import { RouteName } from "../@types"
import { CATEGORIES } from "../data/dummy-data"

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default function CategoryMealsScreen() {
  const { navigate } = useNavigation()
  const categoryId = useNavigationParam("categoryId")

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Text>{selectedCategory?.title}</Text>
      <Button
        title="See Details"
        onPress={() => navigate(RouteName.MealDetail)}
      />
    </View>
  )
}

CategoryMealsScreen.navigationOptions = ({ navigation }: any) => {
  const selectedCategory = CATEGORIES.find(
    cat => cat.id === navigation.getParam("categoryId")
  )?.title

  return {
    headerTitle: selectedCategory,
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }
}
