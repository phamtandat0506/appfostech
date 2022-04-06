//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import { URL } from "../../utils/fetchApi";
import CardProduct from "./CardProduct";

// create a component
const ThanhPham = () => {
  const { products } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#0A1034",
          fontSize: 24,
          fontWeight: "700",
          top: 0,
          margin: 10,
        }}>
        Thành Phẩm
      </Text>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
          {products.product
            .filter((items) => items.ma_nvt === "6094a777ac969b4078488d7e")
            .map((item) => (
              <CardProduct key={item._id} item={item} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFEFF",
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 10,
  },
  wrapper: {
    flexDirection: "row",
  },
  Card: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 31,
  },
});

//make this component available to the app
export default ThanhPham;
