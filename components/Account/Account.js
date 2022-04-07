//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { GLOBALTYPES } from "../../Redux/actions/GlobalTypes";
import { URL } from "../../utils/fetchApi";

// create a component

const Account = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (auth.token !== null) {
      navigation.navigate("Account");
    } else {
      navigation.navigate("Connexion");
    }
  }, [auth.token]);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("@token_key");
      alert("Đăng xuất thành công");
      console.log("Token removed");
      dispatch({ type: GLOBALTYPES.AUTH, payload: null });
      navigation.navigate("Login");
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <View style={styles.container}>
      {auth.token !== null ? (
        <>
          <View style={styles.wrap}>
            <Image
              style={styles.image}
              source={{
                uri: `${URL}/`.concat(`${auth.profile.picture}`),
              }}
            />
            <View style={styles.account}>
              <Text style={{ fontSize: 24, fontWeight: "400" }}>
                {auth.profile.name}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Premium member
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <ScrollView>
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
              <TouchableOpacity style={styles.list} onPress={handleLogout}>
                <Text style={styles.text}>Log out</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </>
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
