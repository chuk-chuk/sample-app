import React from "react"

import { HeaderButtons, Item } from "react-navigation-header-buttons"
import MealList from "../components/MealList"
import { MEALS } from "../data/dummy-data"
import CustomHeaderButton from "../components/HeaderButton"

export default function FavoritesScreen() {
  const displayedFavs = MEALS.filter(meal => meal.id === "m2")

  return <MealList listData={displayedFavs} />
}

FavoritesScreen.navigationOptions = ({ navigation }: any) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  }
}
