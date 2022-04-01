//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  Pressable,
} from "react-native";

// create a component
const LetStart = () => {
  const navigation = useNavigation();
  const handleLetStart = () => {
    navigation.navigate("Carousel");
  };
  const handleSkip = () => {
    navigation.navigate("Narbar");
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

// define your styles
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
});

//make this component available to the app
export default LetStart;
