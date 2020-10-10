import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import { RouteName } from "./@types"
import CategoriesScreen from "./screens/CategoriesScreen"
import CategoryMealsScreen from "./screens/CategoryMealsScreen"
import MealDetailScreen from "./screens/MealDetailScreen"

const AppNavigator = createStackNavigator(
  {
    [RouteName.Categories]: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Categories",
      },
    },
    [RouteName.CategoryMeals]: {
      screen: CategoryMealsScreen,
      navigationOptions: {
        headerTitle: "Meals",
      },
    },
    [RouteName.MealDetail]: {
      screen: MealDetailScreen,
      navigationOptions: {
        headerTitle: "Details",
      },
    },
  },
  {
    headerMode: "float",
    defaultNavigationOptions: {
      animationEnabled: false,
    },
  }
)

export default createAppContainer(AppNavigator)
