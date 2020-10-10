import React from "react"
import { Text } from "react-native"
import { create } from "react-test-renderer"

import App from "./App"

describe("App main", () => {
  it("should render text", () => {
    const { root } = create(<App />)
    expect(root.findByType(Text).props.children).toBe("Categories Screen")
  })
})
