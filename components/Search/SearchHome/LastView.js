//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FlatProduct from "./FlatProduct";

// create a component

const LastView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LastViewed</Text>
      <View>
        <FlatProduct
          source={require("../../../assets/1.jpg")}
          nameProduct="Google pika"
          price="USD 49"
        />
        <FlatProduct
          source={require("../../../assets/2.jpg")}
          nameProduct="Google buff"
          price="USD 43"
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDFEFF",
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: "700",
  },
});

//make this component available to the app
export default LastView;
