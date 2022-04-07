//import liraries
import { useNavigation } from "@react-navigation/native";
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useSelector } from "react-redux";

// create a component
const Cart = () => {
  const navigation = useNavigation();

  const { auth } = useSelector((state) => state);
  useEffect(() => {
    if (auth.token !== null) {
      navigation.navigate("Cart");
    } else {
      navigation.navigate("Connexion");
    }
  }, [auth.token]);

  return (
    <View style={styles.container}>
      {auth.token !== null ? (
        <Text>Cart</Text>
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
