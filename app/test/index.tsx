import { View, Text, ScrollView, StatusBar } from "react-native"
import React from "react"
import { Link } from "expo-router"
import tw from "twrnc"

const test = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={tw`bg-white`}
      keyboardDismissMode="on-drag"
    >
      <View style={tw`flex-1 items-center justify-center`}>
        <Text>test</Text>
        <Link href={"/"}>
          <Text>Go home</Text>
        </Link>
      </View>
      <StatusBar hidden={false} />
    </ScrollView>
  )
}

export default test
