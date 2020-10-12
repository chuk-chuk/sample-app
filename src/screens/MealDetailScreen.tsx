import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { useNavigation, useNavigationParam } from "react-navigation-hooks"
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import { RouteName } from "../@types"
import { MEALS } from "../data/dummy-data"
import HeaderButton from "../components/HeaderButton"

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default function MealDetailScreen() {
  const { navigate } = useNavigation()
  const mealId = useNavigationParam("mealId")

  const selectedMeal = MEALS.find(meal => meal.id === mealId)?.title

  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Text>{selectedMeal}</Text>
      <Button
        title="Back to Main"
        onPress={() => navigate(RouteName.Categories)}
      />
    </View>
  )
}

MealDetailScreen.navigationOptions = ({ navigation }: any) => {
  const selectedMeal = MEALS.find(
    meal => meal.id === navigation.getParam("mealId")
  )?.title

  return {
    headerTitle: selectedMeal,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("MARKED")}
        />
        <Item
          title="Favorite"
          iconName="ios-star-outline"
          onPress={() => console.log("MARKED")}
        />
      </HeaderButtons>
    ),
  }
}
