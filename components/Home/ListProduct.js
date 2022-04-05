//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const ListProduct = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{ color: "#0A1034", fontSize: 24, fontWeight: "700", top: 0 }}>
        Categories
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFEFF",
  },
});

//make this component available to the app
export default ListProduct;
