import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
} from "react-native"
import React from "react"
import tw from "twrnc"
import { Feather } from "@expo/vector-icons"

const Home = () => {
  interface DataItem {
    id: string
    title: string
    image: any
  }

  const DATA: DataItem[] = [
    {
      id: "1",
      image: require("../../assets/images/pyramid.jpg"),
      title: "Pyramid",
    },
    {
      id: "2",
      image: require("../../assets/images/img1.jpg"),
      title: "Mountains",
    },
    {
      id: "3",
      image: require("../../assets/images/img1.jpg"),
      title: "Forest",
    },
    {
      id: "4",
      image: require("../../assets/images/img1.jpg"),
      title: "Item 4",
    },
    {
      id: "5",
      image: require("../../assets/images/img1.jpg"),
      title: "Item 5",
    },
  ]

  const renderItem = ({ item }: { item: DataItem }) => (
    <View style={tw`gap-1 mt-5 rounded-lg`}>
      <Image
        style={tw`w-[100px] h-[100px] mr-3 rounded-[20px]`}
        source={item.image}
        resizeMode="cover"
      />
      <Text style={tw`px-2 text-[15px] font-bold`}>{item.title}</Text>
    </View>
  )

  return (
    <SafeAreaView>
      <ScrollView>
        {/* nav */}
        <View style={tw`flex flex-row items-center justify-between px-5`}>
          <View
            style={tw`items-center justify-center bg-white p-2 rounded-full shadow-lg`}
          >
            <Image
              source={require("../../assets/images/profile.jpg")}
              style={tw`h-12 w-12 rounded-full`}
            />
          </View>

          <Text style={tw`text-xl font-bold`}>Discover Places</Text>

          <TouchableOpacity
            style={tw`items-center justify-center bg-white p-3 rounded-full shadow-lg`}
          >
            <Feather name="search" size={20} />
          </TouchableOpacity>
        </View>

        <View style={tw`px-5 mt-5`}>
          <ImageBackground
            source={require("../../assets/images/img1.jpg")}
            style={tw`h-[400px] relative`}
            imageStyle={{ borderRadius: 20 }}
          >
            <View style={tw`flex-row items-center justify-between px-2`}>
              <View
                style={tw`h-8 w-[100px] bg-white/50 items-center justify-center mt-5 rounded-lg`}
              >
                <Text style={tw`text-white`}>Pyramid</Text>
              </View>

              <View style={tw`flex-row items-center gap-2 mt-5`}>
                <Text style={tw`text-white text-[14px]`}>View More</Text>
                <TouchableOpacity
                  style={tw`bg-orange-500 h-7 w-8 rounded-lg items-center justify-center `}
                >
                  <Feather name="arrow-right" color={"white"} />
                </TouchableOpacity>
              </View>
            </View>

            {/* bottom content */}
            <View style={tw`absolute bottom-[10] px-2`}>
              <Text style={tw`text-2xl font-bold text-white`}>
                Egyptian Pyramid
              </Text>

              <View
                style={tw`flex-row items-center justify-between gap-2 mt-2`}
              >
                <Text style={tw`text-sm text-white w-[280px]`}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  nihil incidunt, voluptas dolorem quidem nesciunt sint beatae,
                </Text>
                <TouchableOpacity style={tw`rounded-lg bg-white/50 p-3`}>
                  <Feather name="bookmark" size={22} color={"white"} />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={tw`px-5 mt-10`}>
          <View style={tw`flex-row items-center justify-between `}>
            <Text style={tw`text-lg font-semibold`}>Category</Text>

            <View style={tw`flex-row items-center justify-center gap-1`}>
              <Text style={tw`text-orange-500 `}>See all</Text>
              <TouchableOpacity
                style={tw`bg-orange-500 h-7 w-8 rounded-lg items-center justify-center `}
              >
                <Feather name="arrow-right" color={"white"} />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
      </ScrollView>
      <StatusBar hidden={false} />
    </SafeAreaView>
  )
}

export default Home
