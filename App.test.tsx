import React from "react"
import { create } from "react-test-renderer"

import App from "./App"
import DefaultText from "./src/components/DefaultText"

describe("App main", () => {
  it("should render text", () => {
    const { root } = create(<App />)
    expect(root.findByType(DefaultText).props.children).toBe("Categories Screen")
  })
})
