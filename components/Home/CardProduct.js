//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { useDispatch } from "react-redux";
import { getItemProduct } from "../../Redux/actions/productAction";
import { URL } from "../../utils/fetchApi";

// create a component
const CardProduct = ({ item }) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleDetails = () => {
    dispatch(getItemProduct(item._id));
    navigation.navigate("Details");
  };

  return (
    <TouchableOpacity
      key={item._id}
      style={{
        height: 180,
        padding: 15,
        backgroundColor: "#ffffff",
        flexBasis: "40%",
        margin: 10,
      }}
      onPress={handleDetails}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.img}
          source={{
            uri: `${URL}/`.concat(`${item.picture}`),
          }}
        />
        <View style={styles.content}>
          <Text
            key={item._id}
            style={{
              fontSize: 16,
              color: "#0A1034",
              fontWeight: "600",
            }}>
            {item.ten_vt}
          </Text>
          <Text
            style={{
              color: "#0001FC",
              fontSize: 12,
              fontWeight: "500",
            }}>
            {item.gia_ban_le} vnd
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
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
export default CardProduct;
