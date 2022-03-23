import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home/Home";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchHome from "./components/Search/SearchHome/SearchHome";
import Narbar from "./components/Narbar/Narbar";

export default function App() {
  const Stack = createNativeStackNavigator();

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
          <Narbar />
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
