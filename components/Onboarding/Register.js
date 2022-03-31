//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";

// create a component
const Register = ({ navigation }) => {
  const handleSkip = () => {
    //setIsShow(true);
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
// define your styles
const styles = StyleSheet.create({
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
});

//make this component available to the app
export default Register;
