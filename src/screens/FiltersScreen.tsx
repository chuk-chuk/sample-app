import React from "react"
import { View } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/HeaderButton"
import DefaultText from "../components/DefaultText"

export default function FiltersScreen() {
  return (
    <View>
      <DefaultText>FILTERS GOES HERE</DefaultText>
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
  }
}
