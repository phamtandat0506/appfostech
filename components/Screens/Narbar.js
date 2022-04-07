//import liraries
import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  StatusBar,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
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
import ListProduct from "../Home/ListProduct";
import Categories from "../Home/Categories";
import News from "../Home/News";
import HangHoa from "../Home/HangHoa";
import ThanhPham from "../Home/ThanhPham";
import FavoriteProduct from "../Home/FavoriteProduct";
import Details from "../Home/Details";
import Cart from "../Cart/Cart";
import StatusCheckout from "../Cart/StatusCheckout";

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
            fontWeight: "bold",
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
function CartScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 32,
          },

          title: "Checkout",
        }}
      />
      <Stack.Screen
        name="Status"
        component={StatusCheckout}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 32,
          },

          title: "Tracking",
        }}
      />
      <Stack.Screen
        name="StatusCheckout"
        component={StatusCheckout}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 32,
          },
          headerShown: false,
          title: "",
        }}
      />
    </Stack.Navigator>
  );
}
function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 32,
          },
          title: "Home",
        }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 32,
          },
          title: "",
        }}
      />
      <Stack.Screen
        name="ListProduct"
        component={ListProduct}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 32,
          },
          title: "",
        }}
      />
      <Stack.Screen
        name="HangHoa"
        component={HangHoa}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 32,
          },
          title: "",
        }}
      />
      <Stack.Screen
        name="ThanhPham"
        component={ThanhPham}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 32,
          },
          title: "",
        }}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 32,
          },
          title: "",
        }}
      />
      <Stack.Screen
        name="FavoriteProduct"
        component={FavoriteProduct}
        options={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 32,
          },
          title: "",
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
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
const Narbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeScreen") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "ios-search" : "ios-search-outline";
          }
          if (route.name === "AccountScreen") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }
          if (route.name === "CartScreen") {
            iconName = focused ? "ios-cart" : "ios-cart-outline";
          }
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Tab.Screen
        component={CartScreen}
        name="CartScreen"
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Tab.Screen
        component={SearchScreen}
        name="Search"
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Tab.Screen
        component={AccountScreen}
        name="AccountScreen"
        options={{
          headerShown: false,
          title: "",
        }}
      />
    </Tab.Navigator>
  );
};

//make this component available to the app
export default Narbar;
