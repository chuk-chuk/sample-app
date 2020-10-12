import React from "react"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { Platform } from "react-native"

import { Ionicons } from "@expo/vector-icons"
import CategoriesScreen from "./screens/CategoriesScreen"
import CategoryMealsScreen from "./screens/CategoryMealsScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
import { RouteName } from "./@types"
import Colors from "./theme/colors"
import FavoritesScreen from "./screens/FavoritesScreen"

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

const TabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          )
        },
      },
    },
    [RouteName.Favorites]: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: "Favorites!",
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          )
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
)

export default createAppContainer(TabNavigator)
