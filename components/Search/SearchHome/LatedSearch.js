//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
// create a component
const LatedSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>LatedSearch</Text>
        <Text style={styles.clear}>Clean all history</Text>
      </View>
      <View style={styles.wrapperr}>
        <Text style={styles.nameProduct}>Smart speaker</Text>
        <Ionicons name="ios-close" style={styles.clear} />
      </View>
      <View style={styles.wrapperr}>
        <Text style={styles.nameProduct}>USB-C charger</Text>
        <Ionicons name="ios-close" style={styles.clear} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#FDFEFF",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  clear: {
    fontSize: 14,
    lineHeight: 16.71,
    fontWeight: "400",
    color: "#A7A9BE",
    marginTop: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 28.64,
    marginLeft: 10,
  },
  nameProduct: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 28.64,
    marginLeft: 12,
    color: "#A7A9BE",
  },
  wrapperr: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 5,
  },
});

//make this component available to the app
export default LatedSearch;
