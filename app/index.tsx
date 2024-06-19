import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { useRouter } from "expo-router"
import { Feather } from "@expo/vector-icons"
// import Animated, { FadeInDown } from "react-native-reanimated"
import tw from "twrnc"
import router from "expo-router"
import { StatusBar } from "react-native"

const index = () => {
  const router = useRouter()
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={tw`h-full w-full relative`}
      >
        <View style={tw`justify-center absolute bottom-[32%] p-4`}>
          <Text style={tw`font-black text-3xl text-white leading-8`}>
            Discover
          </Text>
          <Text style={tw`font-black text-2xl text-white w-[200px] leading-8`}>
            the best lovely places!
          </Text>
          <Text style={tw`text-white/70 mt-3`}>Let Trip Planner guide you</Text>
        </View>

        <View
          style={tw`bg-white/30 p-4 rounded-t-[20px] absolute bottom-0 w-full h-[30%] items-center`}
        >
          <View>
            <TouchableOpacity
              onPress={() => router.push("/home")}
              style={tw`bg-orange-500 flex-row gap-1 rounded-full w-[350px] py-5 mt-2 items-center justify-center`}
            >
              <Text style={tw`text-white`}>Create new Account</Text>
              <Feather name="arrow-right" size={17} color={"white"} />
            </TouchableOpacity>
          </View>

          <Text style={tw`text-center mt-5`}>I Already have an account</Text>

          <View style={tw`flex-row mt-5 items-center`}>
            <View style={tw`w-full border-t-[0.7px] border-white/30`} />
            <Text> OR </Text>
            <View style={tw`w-full border-t-[0.7px] border-white/30`} />
          </View>

          <View style={tw`flex-row mt-5 gap-5`}>
            <TouchableOpacity
              style={tw`flex bg-white/25 shadow-lg h-[50px] w-[50px] items-center rounded-full justify-center`}
            >
              <Image
                source={require("../assets/images/apple.png")}
                height={200}
                width={200}
                style={tw`h-10 w-10`}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex bg-white/25 shadow-lg h-[50px] w-[50px] items-center rounded-full justify-center`}
            >
              <Image
                source={require("../assets/images/search.png")}
                height={200}
                width={200}
                style={tw`h-10 w-10`}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex bg-white/25 shadow-lg h-[50px] w-[50px] items-center rounded-full justify-center`}
            >
              <Image
                source={require("../assets/images/communication.png")}
                height={200}
                width={200}
                style={tw`h-10 w-10`}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <StatusBar hidden={true} />
    </View>
  )
}

export default index
