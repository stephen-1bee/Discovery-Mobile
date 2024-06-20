import { View, Text } from "react-native"
import React from "react"
import { Stack } from "expo-router"

const testLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Welcome",
          headerLargeTitle: true,
          headerLargeTitleShadowVisible: false,
          headerShadowVisible: false,
          headerSearchBarOptions: {
            placeholder: "Search for what you want",
            hideWhenScrolling: true,
          },
        }}
      />
    </Stack>
  )
}

export default testLayout
