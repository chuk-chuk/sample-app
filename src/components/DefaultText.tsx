import React from "react"
import { Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  text: {
    fontFamily: "FuturaPT-Book",
  },
})

export default function DefaultText({ children }: any) {
  return <Text style={styles.text}>{children}</Text>
}
