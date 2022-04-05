//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const Categories = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#0A1034",
          fontSize: 24,
          fontWeight: "700",
          top: 10,
          padding: 10,
        }}>
        Categories
      </Text>
      <View style={styles.wapper}>
        <View style={styles.categories}>
          <Text style={styles.textCa}>All</Text>
        </View>
        <View style={styles.categories}>
          <Text style={styles.textCa}>Table</Text>
        </View>
        <View style={styles.categories}>
          <Text
            style={styles.textCa}
            onPress={() => {
              navigation.navigate("ListProduct");
            }}>
            Laptop
          </Text>
        </View>
        <View style={styles.categories}>
          <Text style={styles.textCa}>Smartphones</Text>
        </View>
        <View style={styles.categories}>
          <Text
            style={styles.textCa}
            onPress={() => {
              navigation.navigate("News");
            }}>
            News
          </Text>
        </View>
        <View style={styles.categories}>
          <Text style={styles.textCa}>Speakers</Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFEFF",
  },
  wapper: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 10,
  },
  categories: {
    backgroundColor: "#ffffff",
    minWidth: 400,
    height: 80,
    marginVertical: 10,
    justifyContent: "center",
    padding: 10,
  },
  textCa: {
    color: "#0A1034",
    fontWeight: "600",
    fontSize: 18,
    marginLeft: 20,
  },
});

//make this component available to the app
export default Categories;
