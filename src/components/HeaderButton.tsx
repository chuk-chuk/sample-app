import React from "react"
import { Platform } from "react-native"
import { HeaderButton } from "react-navigation-header-buttons"
import { Ionicons } from "@expo/vector-icons"

import Colors from "../theme/colors"

export default function CustomHeaderButton(props: any) {
  return (
    <HeaderButton
      {...props}
      color={
        Platform.OS === "android" ? Colors.accentColor : Colors.primaryColor
      }
      IconComponent={Ionicons}
      iconSize={23}
    />
  )
}
