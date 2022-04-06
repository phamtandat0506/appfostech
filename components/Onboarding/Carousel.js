//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  FlatList,
  Button,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const { width, height } = Dimensions.get("screen");

const Next = ({ ...props }) => {
  return <Button title="Next" {...props} />;
};
const Done = ({ ...props }) => {
  return <Button title="Done" {...props} />;
};
const Carousel = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Onboarding
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={() => navigation.navigate("Narbar")}
        onDone={() => navigation.navigate("Connexion")}
        pages={[
          {
            backgroundColor: "#18194E",
            image: (
              <Image
                style={{ width: 318, height: 300, resizeMode: "contain" }}
                source={require("../../assets/traidat1.png")}
              />
            ),
            title: "The best tech market",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#18194E",
            image: (
              <Image
                style={{ width: 318, height: 300, resizeMode: "contain" }}
                source={require("../../assets/pc.png")}
              />
            ),
            title: "A lot of exclusives",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#18194E",
            image: (
              <Image
                style={{ width: 318, height: 300, resizeMode: "contain" }}
                source={require("../../assets/mar.png")}
              />
            ),
            title: "Sales all the time",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18194E",
  },
});

//make this component available to the app
export default Carousel;
