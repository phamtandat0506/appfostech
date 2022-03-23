//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const LatedSearch = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LatedSearch</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#FDFEFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 28.64,
  },
});

//make this component available to the app
export default LatedSearch;
