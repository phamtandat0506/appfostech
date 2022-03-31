//import liraries
import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  StatusBar,
  TextInput,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home/Home";
import SearchHome from "../Search/SearchHome/SearchHome";
import Ionicons from "react-native-vector-icons/Ionicons";

import ProductDetail from "../Search/ProductDetail.js/ProductDetail";
import Account from "../Account/Account";
import AccountInfo from "../Account/AccountInfo";
import ChangeEmail from "../Account/ChangeEmail";
import Login from "../Onboarding/Login";

// create a component
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function SearchScreen() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="SearchHome"
        component={SearchHome}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 32,
          },
          title: "Search",
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );
}
function AccountScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerTitleStyle: {
            fontWeight: "800",
            fontSize: 32,
          },
          title: "Account",
        }}
      />
      <Stack.Screen
        name="AccountInfo"
        component={AccountInfo}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 32,
          },
          title: "",
        }}
      />
      <Stack.Screen
        name="ChangeEmail"
        component={ChangeEmail}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 32,
          },
          title: "",
        }}
      />
      <Stack.Screen
        name="Logins"
        component={Login}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 32,
          },
          title: "",
        }}
      />
    </Stack.Navigator>
  );
}
const Narbar = ({ navigation }) => {
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
            if (route.name === "AccountScreen") {
              iconName = focused ? "ios-person-outline" : "ios-person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
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
          component={SearchScreen}
          name="Search"
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          component={AccountScreen}
          name="AccountScreen"
          options={{
            headerShown: false,
            title: "User",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default Narbar;
