import React from "react"
import { useNavigationParam } from "react-navigation-hooks"

import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealList from "../components/MealList"

export default function CategoryMealsScreen() {
  const categoryId = useNavigationParam("categoryId")

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  )

  return <MealList listData={displayedMeals} />
}

CategoryMealsScreen.navigationOptions = ({ navigation }: any) => {
  const selectedCategory = CATEGORIES.find(
    cat => cat.id === navigation.getParam("categoryId")
  )?.title

  return {
    headerTitle: selectedCategory,
  }
}
