//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, Pressable } from "react-native";

// create a component
const AccountInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Text style={styles.navigationTitle}> Account infomation</Text>

        <View style={styles.card}>
          <View style={styles.username}>
            <Text style={styles.titleusername}>Username</Text>
            <Text style={styles.textUsername}>Thành Vinh</Text>
          </View>
          <View style={styles.buttonx}>
            <Pressable style={styles.button}>
              <Text style={styles.textBtn}>Change</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.username}>
            <Text style={styles.titleusername}>Email</Text>
            <Text style={styles.textUsername}>VinhNguyen@gmail.com</Text>
          </View>
          <View style={styles.buttonx}>
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate("ChangeEmail");
              }}>
              <Text style={styles.textBtn}>Change</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.username}>
            <Text style={styles.titleusername}>Phone number</Text>
            <Text style={styles.textUsername}>+ 33 6 61 39 54 78</Text>
          </View>
          <View style={styles.buttonx}>
            <Pressable style={styles.button}>
              <Text style={styles.textBtn}>Change</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.username}>
            <Text style={styles.titleusername}>Password</Text>
            <Text style={styles.textUsername}>****************</Text>
          </View>
          <View style={styles.buttonx}>
            <Pressable style={styles.button}>
              <Text style={styles.textBtn}>Change</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.username}>
            <Text style={styles.titleusername}>Account type</Text>
            <Text style={styles.textUsername}>Premium</Text>
          </View>
          <View style={styles.buttonx}>
            <Pressable style={styles.button}>
              <Text style={styles.textBtn}>Change</Text>
            </Pressable>
          </View>
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
  navigationTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#0A1034",
    marginBottom: 32,
    marginTop: 56 - (StatusBar.currentHeight || 20) - 20,
  },

  card: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    margin: 20,
  },
  titleusername: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0A1034",
    lineHeight: 21,
  },
  textUsername: {
    color: "#0001FC",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
  },
  buttonx: {
    margin: 25,
    color: "#A7A9BE",
    padding: 10,
  },
});

//make this component available to the app
export default AccountInfo;
