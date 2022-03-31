//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LetStart from "../Onboarding/LetStart";
import Connexion from "../Onboarding/Connexion";
import Login from "../Onboarding/Login";
import Register from "../Onboarding/Register";
import Carousel from "../Onboarding/Carousel";

const Stack = createNativeStackNavigator();
// create a component
const Stacks = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="letStart" component={LetStart} />
        <Stack.Screen name="Carousel" component={Carousel} />
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default Stacks;
