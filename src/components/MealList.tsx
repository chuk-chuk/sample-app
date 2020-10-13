import React from "react"
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native"
import { useNavigation } from "react-navigation-hooks"

import { RouteName } from "../@types"

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "FuturaPT-Heavy",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
})

export default function MealList({ listData }: any) {
  const { navigate } = useNavigation()

  const renderListItem = (itemData: any) => {
    return (
      <View style={styles.mealItem}>
        <TouchableOpacity
          onPress={() =>
            navigate({
              routeName: RouteName.MealDetail,
              params: {
                mealId: itemData.item.id,
              },
            })
          }
        >
          <View>
            <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
              <ImageBackground
                source={{ uri: itemData.item.imageUrl }}
                style={styles.bgImage}
              >
                <View style={styles.titleContainer}>
                  <Text style={styles.title} numberOfLines={1}>
                    {itemData.item.title}
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
              <Text>{itemData.item.duration}m</Text>
              <Text>{itemData.item.complexity}</Text>
              <Text>{itemData.item.affordability}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item): string => item.id}
        data={listData}
        renderItem={renderListItem}
        numColumns={2}
        style={{ width: "100%" }}
      />
    </View>
  )
}