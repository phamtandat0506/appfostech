//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { getAllItemCart } from "../../Redux/actions/cartAction";
import { URL } from "../../utils/fetchApi";
import ItemCart from "./ItemCart";

// create a component
const Cart = () => {
  const navigation = useNavigation();

  const { auth, cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.token !== null) {
      dispatch(getAllItemCart(auth));
      navigation.navigate("Cart");
    } else {
      navigation.navigate("Connexion");
    }
  }, [auth.token, dispatch]);

  return (
    <View style={styles.container}>
      {auth.token !== null ? (
        <ScrollView horizontal>
          {cart.cart.map((item) => {
            return item.details.map((product) => (
              <ItemCart key={item._id} product={product} item={item} />
            ));
          })}
        </ScrollView>
      ) : (
        <>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              borderColor: "#000",
              alignSelf: "center",
              backgroundColor: "#18194E",
              height: 50,
              width: "95%",
              margin: 10,
            }}
            onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 18,
                fontWeight: "600",
                textAlign: "center",
              }}>
              Please login...
            </Text>
          </TouchableOpacity>
        </>
      )}
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
export default Cart;
