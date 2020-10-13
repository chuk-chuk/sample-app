import React, { ReactElement, ReactNode, ReactChildren } from "react"
import { View, StyleSheet, Text, ScrollView, Image } from "react-native"
import { useNavigationParam } from "react-navigation-hooks"
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import { MEALS } from "../data/dummy-data"
import CustomHeaderButton from "../components/HeaderButton"
import DefaultText from "../components/DefaultText"

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },
  listItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
})

const ListItem = ({ children }: any) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  )
}

export default function MealDetailScreen() {
  const mealId = useNavigationParam("mealId")

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal?.duration}m</DefaultText>
        <DefaultText>{selectedMeal?.complexity}</DefaultText>
        <DefaultText>{selectedMeal?.affordability}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal?.ingredients.map(
        (item: string): ReactElement => (
          <ListItem key={item}>{item}</ListItem>
        )
      )}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal?.steps.map(
        (step: string): ReactElement => (
          <ListItem key={step}>{step}</ListItem>
        )
      )}
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = ({ navigation }: any) => {
  const selectedMeal = MEALS.find(
    meal => meal.id === navigation.getParam("mealId")
  )?.title

  return {
    headerTitle: selectedMeal,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          // eslint-disable-next-line no-console
          onPress={() => console.log("click me!")}
        />
      </HeaderButtons>
    ),
  }
}
