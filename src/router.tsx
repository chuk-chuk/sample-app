import React from "react"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createDrawerNavigator } from "react-navigation-drawer"
import { Platform } from "react-native"

import { Ionicons } from "@expo/vector-icons"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import CategoriesScreen from "./screens/CategoriesScreen"
import CategoryMealsScreen from "./screens/CategoryMealsScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
import { RouteName } from "./@types"
import Colors from "./theme/colors"
import FavoritesScreen from "./screens/FavoritesScreen"
import FiltersScreen from "./screens/FiltersScreen"

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
      headerTintColor: Colors.backgroundColor,
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerBackTitleStyle: {
        fontWeight: "normal",
      },
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.accentColor : Colors.primaryColor,
        height: 80,
      },
    },
  }
)

const BottomStackNavigator = createStackNavigator(
  {
    [RouteName.Favorites]: {
      screen: FavoritesScreen,
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
        height: 80,
      },
    },
  }
)

const tabNavigatorConfig = {
  [RouteName.Meals]: {
    screen: AppNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        )
      },
    },
  },
  [RouteName.Favorites]: {
    screen: BottomStackNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabInfo: any) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      },
    },
  },
}

const TabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabNavigatorConfig, {
        activeColor: Colors.accentColor,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabNavigatorConfig, {
        tabBarOptions: {
          labelStyle: {
            fontWeight: "bold",
          },
          activeTintColor: Colors.activeTintColor,
        },
      })

const FiltersNavigator = createStackNavigator(
  {
    [RouteName.Filters]: {
      screen: FiltersScreen,
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
        shadowColor: "green",
        height: 80,
      },
    },
  }
)

const MainNavigator = createDrawerNavigator(
  {
    [RouteName.MealsFavs]: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    [RouteName.Filters]: {
      screen: FiltersNavigator,
      navigationOptions: {
        drawerLabel: "Filters",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.primaryColor,
      labelStyle: {
        fontFamily: "FuturaPT-Heavy",
        fontSize: 18,
      },
    },
  }
)

export default createAppContainer(MainNavigator)
