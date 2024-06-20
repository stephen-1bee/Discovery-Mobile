import { View, Text } from "react-native"
import React from "react"
import { Tabs, Redirect } from "expo-router"
import { Feather } from "@expo/vector-icons"

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "red",
          //   tabBarInactiveTintColor: "#CDCDEO",
          tabBarStyle: {
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
            tabBarIcon: ({ color, focused }) => (
              <Feather name="home" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="people"
          options={{
            headerShown: false,
            title: "PEOPLE",
            tabBarIcon: ({ color, focused }) => (
              <Feather name="users" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "BOOKMARKS",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Feather name="bookmark" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="setting"
          options={{
            headerShown: false,
            title: "SETTINGS",
            tabBarIcon: ({ color }) => (
              <Feather name="settings" size={20} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  )
}

export default TabLayout
