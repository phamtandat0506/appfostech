import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home/Home';

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchHome from "./components/Search/SearchHome/SearchHome";

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: '#fff',
              fontSize: '32',
              fontWeight: 800,
            },
            headerTintColor: 'black',
            
          }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ 
            title: 'Home',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 32,
            },
          }}
        />

        <Stack.Screen 
                  name="Search" 
                  component={SearchHome}
                />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 20,
    backgroundColor: "#FDFEFF",
  },
});




// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
// <Stack.Screen 
//           name="Search" 
//           component={Search}
//         />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
