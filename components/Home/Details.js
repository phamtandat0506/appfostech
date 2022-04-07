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
import { useDispatch, useSelector } from "react-redux";
import { URL } from "../../utils/fetchApi";
import HTMLView from "react-native-htmlview";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const height = (width * 100) / 120;

const Details = () => {
  const { products, auth } = useSelector((state) => state);

  const [state, setState] = useState({
    active: 0,
  });
  const navigation = useNavigation();

  const picture = `${URL}/`.concat(`${products.productDe.picture}`);
  const picture2 = `${URL}/`.concat(`${products.productDe.picture2}`);

  const images = [picture, picture2];

  const [isAdd, setIsAdd] = useState(false);
  const handleChange = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== state.active) {
      setState({ active: slide });
    }
  };
  const dispatch = useDispatch();
  const handleAddcart = async () => {
    // console.log(auth.token);
    if (auth.token !== null) {
      setIsAdd(true);
      //dispatch(addCart(auth, products.productDe));
    } else {
      navigation.navigate("Connexion");
    }
  };
  const handleBackShop = () => {
    setIsAdd(false);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Text style={styles.navigationTitle}>{products.productDe.ten_vt}</Text>
        <ScrollView>
          <View style={{ width, height }}>
            <ScrollView
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scroll}
              onScroll={handleChange}>
              {images.map((item, index) => (
                <Image
                  key={index}
                  source={{ uri: item }}
                  style={styles.image}
                />
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
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <Text style={styles.title}>Giá:</Text>
            <Text style={styles.price}>
              {products.productDe.gia_ban_le} vnd
            </Text>
          </View>

          <HTMLView
            style={{ padding: 5 }}
            value={products.productDe.mieu_ta_chi_tiet}
            stylesheet={styles}
          />
          <Pressable style={styles.button} onPress={handleAddcart}>
            <Text style={styles.textBtn}>Add to cart</Text>
          </Pressable>
        </ScrollView>
      </View>
      {isAdd && (
        <View style={{ flex: 1, justifyContent: "center" }}>
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
    margin: 20,
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
    resizeMode: "cover",
  },
  dot: {
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
  },
  dotText: {
    fontSize: 14,
    color: "#f1f1f1",
    marginLeft: 3,
  },
  dotActiveText: {
    fontSize: 14,
    color: "#A7A9BE",
    marginLeft: 3,
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "600",
    paddingTop: 10,
  },
  price: {
    color: "#F50206",
    padding: 6,
    fontWeight: "700",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#18194E",
    height: 53,
    marginTop: 20,
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
export default Details;
