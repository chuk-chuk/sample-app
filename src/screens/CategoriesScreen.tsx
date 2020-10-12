import React, { ReactElement } from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
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
    elevation: 3,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
  },
  container: {
    flex: 1,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "FuturaPT-Heavy",
    fontSize: 22,
    textAlign: "right",
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
        <View
          style={{
            ...styles.container,
            ...{ backgroundColor: itemData.item.color },
          }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {itemData.item.title}
          </Text>
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
