//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FlatProduct from "./FlatProduct";

// create a component

const LastView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LastViewed</Text>
      <View>
        <FlatProduct
          source={require("../../../assets/air.png")}
          nameProduct="Air pods"
          price="USD 49"
          navigation={navigation}
        />
        <FlatProduct
          source={require("../../../assets/macbooke.png")}
          nameProduct="Macbook air"
          price="USD 1243"
          navigation={navigation}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDFEFF",
    top: 5,
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: "700",
    marginLeft: 10,
    lineHeight: 28.64,
  },
});

//make this component available to the app
export default LastView;
