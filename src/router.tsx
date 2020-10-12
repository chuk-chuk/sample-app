import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { Platform } from "react-native"

import CategoriesScreen from "./screens/CategoriesScreen"
import CategoryMealsScreen from "./screens/CategoryMealsScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
import { RouteName } from "./@types"
import Colors from "./theme/colors"

const AppNavigator = createStackNavigator(
  {
    [RouteName.Categories]: {
      screen: CategoriesScreen,
    },
    [RouteName.CategoryMeals]: {
      screen: CategoryMealsScreen,
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
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.accentColor : Colors.primaryColor,
        borderRadius: 15,
        shadowColor: "green",
        height: 100,
      },
    },
  }
)

export default createAppContainer(AppNavigator)
