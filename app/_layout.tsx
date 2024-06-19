import { View, Text } from "react-native"
import React from "react"
import { Slot, Stack } from "expo-router"
import tw from "twrnc"

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout
