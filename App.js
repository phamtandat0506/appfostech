import Narbar from "./components/Screens/Narbar";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import LetStart from "./components/Onboarding/LetStart";
import Carousel from "./components/Onboarding/Carousel";
import Connexion from "./components/Onboarding/Connexion";
import Login from "./components/Onboarding/Login";
import Register from "./components/Onboarding/Register";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="letStart" component={LetStart} />
          <Stack.Screen name="Carousel" component={Carousel} />
          <Stack.Screen name="Connexion" component={Connexion} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Narbar" component={Narbar} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
