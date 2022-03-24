//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

// create a component
const images = [
  "https://cdn.tgdd.vn/Products/Images/42/230521/Slider/vi-vn-iphone-13-pro-slider-tong-quan.jpg",
  "https://cdn.tgdd.vn/Products/Images/42/230521/Slider/vi-vn-iphone-13-pro-slider-hieu-nang.jpg",
  "https://cdn.tgdd.vn/Products/Images/42/230521/Slider/vi-vn-iphone-13-pro-slider-camera.jpg",
  "https://cdn.tgdd.vn/Products/Images/42/230521/Slider/iphone-13-pro-slider-oled-1020x570-1.jpg",
  "https://cdn.tgdd.vn/Products/Images/42/230521/Slider/iphone-13-pro-slider-120hz-1020x570.jpg",
  "https://cdn.tgdd.vn/Products/Images/42/230521/Slider/iphone-13-pro-slider-promotion-1020x570.jpg",
  "https://cdn.tgdd.vn/Products/Images/42/230521/Slider/iphone-13-pro-slider-ios15-1020x570.jpg",
];

const { width } = Dimensions.get("window");
const height = (width * 100) / 140;

const ProductDetail = ({ navigation }) => {
  let state = {
    active: 0,
  };
  //   const handleChange = ({ nativeEvent }) => {
  //     const slide = nativeEvent.conten;
  //   };
  return (
    <View style={styles.container}>
      <Text style={styles.navigationTitle}>Iphone 11 Pro</Text>
      <View style={{ width, height }}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}>
          {/* onScroll={handleChange} */}
          {images.map((item, index) => (
            <Image key={index} source={{ uri: item }} style={styles.image} />
          ))}
        </ScrollView>
        <View style={styles.dot}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={k == state.active ? styles.dotActiveText : styles.dotText}>
              ⬤
            </Text>
          ))}
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
    fontSize: 24,
    fontWeight: "700",
    color: "#0A1034",
    marginTop: 20,
    marginLeft: 16,
    lineHeight: 29,
  },
  scroll: {
    width,
    height,
  },
  image: {
    width,
    height,
    resizeMode: "contain",
  },
  dot: {
    flexDirection: "row",
    position: "absolute",
    bottom: 8,
    alignSelf: "center",
  },
  dotText: {
    color: "#f1f1f1",
    marginLeft: 3,
  },
  dotActiveText: {
    color: "#A7A9BE",
    marginLeft: 3,
  },
});

//make this component available to the app
export default ProductDetail;
