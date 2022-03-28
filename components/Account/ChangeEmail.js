//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  TextInput,
} from "react-native";

// create a component
const ChangeEmail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Text style={styles.navigationTitle}>Email</Text>
        <View style={styles.exitsContent}>
          <Text style={{ fontSize: 24, color: "#0A1034", fontWeight: "700" }}>
            Actual email address
          </Text>
          <Text
            style={{
              color: "#0001FC",
              fontSize: 16,
              lineHeight: 19,
              fontWeight: "500",
            }}>
            VinhNguyen@gmail.com
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.one}>
            <Text style={styles.title}>New email address</Text>
            <TextInput style={styles.textInput} placeholder="Email" />
          </View>
          <View style={styles.one}>
            <Text style={styles.title}>Comfirm email address</Text>
            <TextInput style={styles.textInput} placeholder="Email" />
          </View>
          <View style={styles.buttonx}>
            <Pressable style={styles.button}>
              <Text style={styles.textBtn}>Confirm modification</Text>
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
    left: 16,
    marginTop: 56 - (StatusBar.currentHeight || 20) - 20,
  },
  exitsContent: {
    margin: 24,
  },
  form: {
    margin: 24,
    marginVertical: 10,
  },
  one: {
    marginBottom: 40,
  },
  title: {
    fontSize: 18,
    lineHeight: 21.48,
    fontWeight: "600",
    color: "#0A1034",
  },
  textInput: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 12,
  },
  button: {
    backgroundColor: "#18194E",
    height: 53,

    alignItems: "center",
    justifyContent: "center",

    minWidth: 400,
  },
  textBtn: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 21.48,
    textAlign: "center",
    color: "#f1f1f1",
  },
});

//make this component available to the app
export default ChangeEmail;
