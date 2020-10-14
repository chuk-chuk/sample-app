import React, { useState, useEffect, useCallback } from "react"
import { View, StyleSheet, Text, Switch, Platform } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import Colors from "../theme/colors"
import CustomHeaderButton from "../components/HeaderButton"

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    margin: 20,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
})

const FilterSwitch = ({
  label,
  state,
  onChange,
}: {
  label: string
  state: boolean
  onChange: (value: boolean) => void
}) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ false: "grey", true: Colors.primaryColor }}
        thumbTintColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        value={state}
        onValueChange={onChange}
      />
    </View>
  )
}

export default function FiltersScreen({ navigation }: any) {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    }

    console.log(appliedFilters)
  }, [isVegetarian, isVegan, isGlutenFree, isLactoseFree])

  useEffect(() => {
    navigation.setParams({ save: saveFilters })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filters Settings</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={value => setIsGlutenFree(value)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={value => setIsLactoseFree(value)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={value => setIsVegan(value)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={value => setIsVegetarian(value)}
      />
    </View>
  )
}

FiltersScreen.navigationOptions = ({ navigation }: any) => {
  return {
    headerTitle: "My Filters",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  }
}
