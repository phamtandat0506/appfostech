//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable, Button, Image } from "react-native";

// create a component
const Connexion = ({ navigation }) => {
  const handleSkip = () => {
    // setIsShow(true);
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
            navigation.navigate("Login");
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
export default Connexion;
