//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";
import { BlurView } from "expo-blur";
import Ionicons from "react-native-vector-icons/Ionicons";

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
const height = (width * 100) / 120;

const ProductDetail = ({ navigation }) => {
  const [state, setState] = useState({
    active: 0,
  });
  const [isAdd, setIsAdd] = useState(false);
  const handleChange = ({ nativeEvent, navigation }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== state.active) {
      setState({ active: slide });
    }
  };
  const handleAddcart = () => {
    setIsAdd(true);
  };
  const handleBackShop = () => {
    setIsAdd(false);
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Text style={styles.navigationTitle}>Iphone 11 Pro</Text>
        <View style={{ width, height }}>
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scroll}
            onScroll={handleChange}>
            {images.map((item, index) => (
              <Image key={index} source={{ uri: item }} style={styles.image} />
            ))}
          </ScrollView>
          <View style={styles.dot}>
            {images.map((i, k) => (
              <Text
                key={k}
                style={
                  k == state.active ? styles.dotActiveText : styles.dotText
                }>
                ⬤
              </Text>
            ))}
          </View>
        </View>
        <View>
          <Text style={styles.title}>Color</Text>
          <View style={styles.colorPro}>
            <Text style={{ color: "#A7A9BE", fontSize: 35, marginLeft: 10 }}>
              ⬤
            </Text>
            <Text style={{ color: "#f0f0f0", fontSize: 35, marginLeft: 10 }}>
              ⬤
            </Text>
            <Text style={{ color: "#020303", fontSize: 35, marginLeft: 10 }}>
              ⬤
            </Text>
            <Text style={{ color: "#ba7db6", fontSize: 35, marginLeft: 10 }}>
              ⬤
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>Capacity</Text>
          <View style={styles.capPro}>
            <Text style={styles.capacityProduct}>64gb</Text>
            <Text style={styles.capacityProduct}>128gb</Text>
            <Text style={styles.capacityProduct}>256gb</Text>
          </View>
        </View>
        <Pressable style={styles.button} onPress={handleAddcart}>
          <Text style={styles.textBtn}>Add to cart</Text>
        </Pressable>
      </View>
      {isAdd && (
        <View>
          <BlurView intensity={100}>
            <View style={styles.Added}>
              <Ionicons
                style={styles.iconCart}
                name="ios-cart"
                size={100}
                color="#0A1034"
              />
              <Text
                style={{ fontSize: 24, fontWeight: "700", lineHeight: 28.64 }}>
                Product added to cart!
              </Text>
              <Pressable style={styles.button} onPress={handleBackShop}>
                <Text style={styles.textBtn}>Back to shopping</Text>
              </Pressable>
            </View>
          </BlurView>
        </View>
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
    bottom: 15,
    alignSelf: "center",
  },
  dotText: {
    fontSize: 15,
    color: "#f1f1f1",
    marginLeft: 3,
  },
  dotActiveText: {
    fontSize: 15,
    color: "#A7A9BE",
    marginLeft: 3,
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "600",
  },
  colorPro: {
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  capPro: {
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  capacityProduct: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19.09,
    marginLeft: 15,
  },
  button: {
    backgroundColor: "#18194E",
    height: 53,
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
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
  Added: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderWidth: 2,
    alignItems: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

//make this component available to the app
export default ProductDetail;
