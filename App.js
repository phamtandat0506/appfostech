import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home/Home";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Narbar from "./components/Narbar/Narbar";

export default function App() {
  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#fff",
              fontSize: "32",
              fontWeight: 800,
            },
            headerTintColor: "black",
          }}>
          <Stack.Screen name="SearchDetail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer> */}
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
