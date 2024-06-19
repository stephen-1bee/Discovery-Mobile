import { View, Text } from "react-native"
import React from "react"
import { Tabs, Redirect } from "expo-router"
import { Feather } from "@expo/vector-icons"

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "FFA500",
          tabBarInactiveTintColor: "#CDCDEO",
          tabBarStyle: {
            // backgroundColor: "#FFA500",
            borderRadius: 50,
            shadowColor: "#FFA500",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: "HOME",
            tabBarIcon: () => <Feather name="home" size={20} />,
          }}
        />
        <Tabs.Screen
          name="people"
          options={{
            headerShown: false,
            title: "PEOPLE",
            tabBarIcon: () => <Feather name="users" size={20} />,
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "BOOKMARKS",
            headerShown: false,
            tabBarIcon: () => <Feather name="bookmark" size={20} />,
          }}
        />
        <Tabs.Screen
          name="setting"
          options={{
            headerShown: false,
            title: "SETTINGS",
            tabBarIcon: () => <Feather name="settings" size={20} />,
          }}
        />
      </Tabs>
    </>
  )
}

export default TabLayout
