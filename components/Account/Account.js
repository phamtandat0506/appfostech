//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// create a component

const Account = () => {
  const { auth } = useSelector((state) => state);
  const [isShow, setShow] = useState(false);
  const navigation = useNavigation();

  useEffect(async () => {
    const jsonValue = await AsyncStorage.getItem("@token_key");

    if (JSON.parse(jsonValue) !== null) {
      navigation.navigate("Account");
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      {setShow ? (
        <>
          <View style={styles.wrap}>
            <Image
              style={styles.image}
              source={require("../../assets/thanhvinh.jpg")}
            />
            <View style={styles.account}>
              <Text style={{ fontSize: 24, fontWeight: "400" }}>
                Thành Vinh
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Premium member
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={styles.list}>
              <Text style={styles.text}>Orders</Text>
            </View>
            <View style={styles.list}>
              <Text style={styles.text}>Returns and refunds</Text>
            </View>
            <View style={styles.list}>
              <Text
                style={styles.text}
                navigation={navigation}
                onPress={() => {
                  navigation.navigate("AccountInfo");
                }}>
                Account infomation
              </Text>
            </View>
            <View style={styles.list}>
              <Text style={styles.text}>Security and setting</Text>
            </View>
            <View style={styles.list}>
              <Text style={styles.text}>Log out</Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <Text
            onPress={() => {
              navigation.navigate("Login");
            }}>
            Login
          </Text>
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
  wrap: {
    marginTop: 30,
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 10,
    justifyContent: "flex-start",
  },
  image: {
    marginRight: 20,
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 90,
  },
  account: {
    justifyContent: "center",
  },
  list: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    shadowColor: "#171717",
    marginVertical: 10,
    textAlign: "center",
  },
  text: {
    color: "#0A1034",
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "600",
    margin: 20,
  },
});

//make this component available to the app
export default Account;
