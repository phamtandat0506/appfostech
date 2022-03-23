//import liraries
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home/Home";
import SearchHome from "../Search/SearchHome/SearchHome";
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
const Tab = createBottomTabNavigator();
const Narbar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "ios-search" : "ios-search";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 32,
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchHome}
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 32,
            },
            headerLeft: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Narbar;
