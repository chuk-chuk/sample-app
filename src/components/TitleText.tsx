import React from "react"
import { Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  text: {
    fontFamily: "FuturaPT-Heavy",
    fontSize: 22,
  },
})

export default function TitleText({ children }: any) {
  return <Text style={styles.text}>{children}</Text>
}
