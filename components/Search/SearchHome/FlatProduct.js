//import liraries
import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";

const FlatProduct = ({ source, nameProduct, price }) => {
  return (
    <View style={styles.body}>
      <Image style={styles.image} source={source} />
      <View style={styles.info}>
        <Text style={styles.nameProduct}>{nameProduct}</Text>
        <Text style={styles.Price}>{price}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  body: {
    flexDirection: "row",
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    width: "100%",
    padding: 15,
    marginVertical: 5,
  },
  info: {
    marginLeft: 30,
  },
  image: {
    width: 120,
    height: 120,
  },
  nameProduct: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    top: 30,
    lineHeight: 21,
    color: "#0A1034",
  },
  Price: {
    fontWeight: "500",
    fontStyle: "normal",

    fontSize: 14,
    lineHeight: 17,
    top: 35,
    /* identical to box height */
    color: "#0135EB",
  },
});

//make this component available to the app
export default FlatProduct;
