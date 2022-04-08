//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { getItemProduct } from "../../Redux/actions/productAction";
import { URL } from "../../utils/fetchApi";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

// create a component
const ItemCart = ({ product, item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleDetails = () => {
    dispatch(getItemProduct(item._id));
    navigation.navigate("Details");
  };

  const deleteCart = () => {
    console.log(item._id);
  };
  return (
    <View
      key={item._id}
      style={{
        height: 180,
        padding: 15,
      }}>
      <View style={styles.cardProduct}>
        <View style={styles.header}>
          <View>
            <Text style={{ color: "#0000ff" }}>New</Text>
          </View>
          <TouchableOpacity>
            <Ionicons
              name="close-circle-outline"
              size={30}
              onPress={deleteCart}></Ionicons>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleDetails}>
          <View style={styles.body}>
            <Image
              style={styles.img}
              source={{
                uri: `${URL}/`.concat(`${product.picture}`),
              }}
            />
          </View>
          <View style={styles.footer}>
            <View>
              <Text
                style={{
                  color: "#0A1034",
                  fontWeight: "600",
                  fontSize: 18,
                }}>
                {product.ten_vt}
              </Text>
              <Text
                style={{
                  color: "#0001FC",
                  fontSize: 14,
                  fontWeight: "500",
                }}>
                {product.gia_ban_le}
              </Text>
            </View>
            <Text
              style={{
                color: "#0001FC",
                fontWeight: "400",
                fontSize: 14,
                alignItems: "center",
              }}>
              x1
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  cardProduct: {
    backgroundColor: "#FFffff",
    borderRadius: 5,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
  body: {
    padding: 10,
  },
  img: {
    resizeMode: "contain",
    width: 170,
    height: 170,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    alignSelf: "center",
    alignItems: "flex-end",
  },
});

//make this component available to the app
export default ItemCart;
