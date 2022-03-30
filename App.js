import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home/Home";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Narbar from "./components/Narbar/Narbar";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <Narbar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 20,
    backgroundColor: "#FDFEFF",
  },
});
