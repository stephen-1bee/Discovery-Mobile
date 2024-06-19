import { View, Text } from "react-native"
import React from "react"
import { Link } from "expo-router"
import tw from "twrnc"

const test = () => {
  return (
    <View style={tw`flex-1 h-full items-center justify-center `}>
      <Text>test</Text>
      <Link href={"/"}>
        <Text>Go home</Text>
      </Link>
    </View>
  )
}

export default test
