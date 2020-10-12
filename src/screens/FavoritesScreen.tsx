import React from "react"

import MealList from "../components/MealList"
import { MEALS } from "../data/dummy-data"

export default function FavoritesScreen() {
  const displayedFavs = MEALS.filter(meal => meal.id === "m2")

  return <MealList listData={displayedFavs} />
}

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
}
