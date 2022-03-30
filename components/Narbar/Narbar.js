//import liraries
import * as React from "react";
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
import Carousel from "../Onboarding/Carousel";

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
    </Stack.Navigator>
  );
}
const Narbar = () => {
  const [isShow, setIsShow] = React.useState(false);

  const LetStart = ({ navigation }) => {
    const handleLetStart = () => {
      navigation.navigate("Carousel");
    };
    const handleSkip = () => {
      setIsShow(true);
    };
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.boxImage}>
          <Image
            style={styles.image}
            source={require("../../assets/LOGOFOStrang.png")}
          />
        </View>
        <View style={styles.boxButton}>
          <Pressable style={styles.button} onPress={handleLetStart}>
            <Text style={styles.textBtn}>Let's start</Text>
          </Pressable>
          <Text
            style={{
              color: "#ffffff",
              fontSize: 18,
              fontWeight: "600",
              textAlign: "center",
              marginTop: 40,
            }}
            onPress={handleSkip}
            onLongPress={() => navigation.navigate("Home")}>
            Skip for now
          </Text>
        </View>
      </View>
    );
  };
  const Login = ({ navigation }) => {
    const handleSkip = () => {
      setIsShow(true);
    };
    return (
      <View style={styles.wrap}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 24,
            lineHeight: 28.64,
            color: "#ffffff",
          }}>
          Login
        </Text>
        <View style={styles.form}>
          <View style={styles.form}>
            <View style={styles.one}>
              <Text style={styles.title}>Email</Text>
              <TextInput
                placeholderTextColor={"white"}
                style={styles.textInput}
                placeholder="Email"
              />
            </View>
            <View style={styles.one}>
              <Text style={styles.title}>Password</Text>
              <TextInput
                placeholderTextColor={"white"}
                style={styles.textInput}
                placeholder="Password"
              />
            </View>
            <View style={styles.buttons}>
              <Pressable style={styles.buttonLogin}>
                <Text style={styles.textBtnLogin}>Validate</Text>
              </Pressable>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "400",
                  color: "#FBDF00",
                  margin: 20,
                  textAlign: "center",
                }}
                onPress={() => {
                  navigation.navigate("Register");
                }}>
                Don't have an account? Sign-up
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 18,
            fontWeight: "600",
            textAlign: "center",
            marginTop: 40,
          }}
          onPress={handleSkip}>
          Skip for now
        </Text>
      </View>
    );
  };

  const Register = ({ navigation }) => {
    const handleSkip = () => {
      setIsShow(true);
    };
    return (
      <View style={styles.wrap}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 24,
            lineHeight: 28.64,
            color: "#ffffff",
          }}>
          Create an account
        </Text>

        <View style={styles.form}>
          <View style={styles.one}>
            <Text style={styles.title}>Fullname</Text>
            <TextInput
              placeholderTextColor={"white"}
              style={styles.textInput}
              placeholder="Full name"
            />
          </View>
          <View style={styles.one}>
            <Text style={styles.title}>Email</Text>
            <TextInput
              placeholderTextColor={"white"}
              style={styles.textInput}
              placeholder="Email"
            />
          </View>
          <View style={styles.one}>
            <Text style={styles.title}>Password</Text>
            <TextInput
              placeholderTextColor={"white"}
              style={styles.textInput}
              placeholder="Password"
            />
          </View>
          <View style={styles.buttons}>
            <Pressable style={styles.buttonLogin}>
              <Text style={styles.textBtnLogin}>Validate</Text>
            </Pressable>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#FBDF00",
                margin: 20,
                textAlign: "center",
              }}
              onPress={() => {
                navigation.navigate("Login");
              }}>
              Already have an account? Login
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 18,
            fontWeight: "600",
            textAlign: "center",
            marginTop: 40,
          }}
          onPress={handleSkip}>
          Skip for now
        </Text>
      </View>
    );
  };

  const Connexion = ({ navigation }) => {
    const handleSkip = () => {
      setIsShow(true);
    };
    return (
      <View style={styles.wrap}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 24,
            lineHeight: 28.64,
            color: "#ffffff",
          }}>
          Connexion
        </Text>
        <View style={styles.form}>
          <View style={styles.buttonx}>
            <Pressable style={styles.buttonLogin}>
              <Text
                style={styles.textBtnLogin}
                onPress={() => {
                  navigation.navigate("Register");
                }}>
                Create an account
              </Text>
            </Pressable>
          </View>
          <View style={styles.buttonx}>
            <Pressable style={styles.buttonGg}>
              <Text style={styles.textBtnGg}>Connect with Google</Text>
            </Pressable>
          </View>
          <View style={styles.buttonx}>
            <Pressable style={styles.buttonFb}>
              <Text style={styles.textBtnFb}>Connect with Facebook</Text>
            </Pressable>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "400",
              color: "#FBDF00",
              top: 60,
              textAlign: "center",
            }}
            onPress={() => {
              navigation.navigate("Register");
            }}>
            Already have an account? Login
          </Text>
        </View>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 18,
            fontWeight: "600",
            textAlign: "center",
            marginTop: 30,
          }}
          onPress={handleSkip}>
          Skip for now
        </Text>
      </View>
    );
  };
  return (
    <NavigationContainer>
      {isShow ? (
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
                iconName = focused
                  ? "ios-person-outline"
                  : "ios-person-outline";
              }

              // You can return any component that you like here!
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
              // headerTitleStyle: {
              //   fontWeight: "bold",
              //   fontSize: 32,
              // },
              headerShown: false,
            }}
          />
          <Tab.Screen
            component={AccountScreen}
            name="AccountScreen"
            options={{
              // headerTitleStyle: {
              //   fontWeight: "bold",
              //   fontSize: 32,
              // },
              headerShown: false,
              title: "User",
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="letStart" component={LetStart} />
          <Stack.Screen name="Carousel" component={Carousel} />
          <Stack.Screen name="Connexion" component={Connexion} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18194E",
    justifyContent: "center",
    alignItems: "center",
  },
  boxImage: {
    shadowColor: "#ffffff",
  },
  image: {
    resizeMode: "contain",
  },

  button: {
    backgroundColor: "#ffffff",
    height: 53,
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    minWidth: 400,
    marginBottom: 70,
  },
  textBtn: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
    color: "#18194E",
  },
  ////////Login css
  wrap: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#18194E",
  },
  form: {
    top: 40,
    marginVertical: 10,
  },
  one: {
    marginBottom: 40,
  },

  title: {
    fontSize: 18,
    lineHeight: 21.48,
    fontWeight: "600",
    color: "#ffffff",
  },
  textInput: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 12,
    color: "#ffffff",
    borderColor: "#ffffff",
  },
  buttonx: {
    marginTop: 40,
  },
  buttonLogin: {
    backgroundColor: "#ffffff",
    height: 53,

    alignItems: "center",
    justifyContent: "center",

    minWidth: 400,
  },
  textBtnLogin: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 21.48,
    textAlign: "center",
    color: "#0001FC",
  },
  buttonGg: {
    backgroundColor: "#ffffff",
    height: 53,

    alignItems: "center",
    justifyContent: "center",

    minWidth: 400,
  },
  textBtnGg: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 21.48,
    textAlign: "center",
    color: "#555555",
  },
  buttonFb: {
    backgroundColor: "#415A93",
    height: 53,

    alignItems: "center",
    justifyContent: "center",

    minWidth: 400,
  },
  textBtnFb: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 21.48,
    textAlign: "center",
    color: "#ffffff",
  },
});
//make this component available to the app
export default Narbar;
