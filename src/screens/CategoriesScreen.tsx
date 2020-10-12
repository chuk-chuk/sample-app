import React, { ReactElement } from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { useNavigation } from "react-navigation-hooks"

import { RouteName } from "../@types"
import { CATEGORIES } from "../data/dummy-data"

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
})

export default function CategoriesScreen() {
  const { navigate } = useNavigation()

  const renderGridItem = (itemData: any): ReactElement => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          navigate({
            routeName: RouteName.CategoryMeals,
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      keyExtractor={(item): string => item.id}
    />
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: "Categories",
}
