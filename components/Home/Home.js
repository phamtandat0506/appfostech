import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../../Redux/actions/productAction";
import CardProduct from "./CardProduct";
import { getAllItemCart } from "../../Redux/actions/cartAction";

const w = Dimensions.get("screen").width;
const h = w * 0.6;
const w4 = w / 4;

const images = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80",
  "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
];

export default function Home() {
  const dispatch = useDispatch();
  const { products, auth } = useSelector((state) => state);
  const [active, setActive] = useState("");
  const navigation = useNavigation();
  // const image = [picture1, picture2, picture3];

  const handleScroll = (event) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch, auth.token]);

  return (
    <View style={styles.container}>
      <View style={styles.inSlider}>
        <ScrollView
          pagingEnabled
          horizontal
          style={styles.scroll}
          onScroll={handleScroll}>
          {images.map((image, index) => (
            <Image
              key={index}
              source={{
                uri: image,
              }}
              style={styles.img}
            />
          ))}
        </ScrollView>

        <View style={styles.dot}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={k == active ? styles.textInDotActive : styles.textInDot}>
              ⬤
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.flex}>
        <View style={styles.inFlex}>
          <View>
            <Ionicons
              name="menu-outline"
              style={styles.text}
              onPress={() => {
                navigation.navigate("Categories");
              }}></Ionicons>
          </View>
          <Text style={styles.title}>Categories</Text>
        </View>
        <View style={styles.inFlex}>
          <View>
            <Ionicons
              name="star-outline"
              style={styles.text}
              onPress={() => navigation.navigate("FavoriteProduct")}></Ionicons>
          </View>
          <Text style={styles.title}>Favorites</Text>
        </View>
        <View style={styles.inFlex}>
          <View>
            <Ionicons name="gift-outline" style={styles.text}></Ionicons>
          </View>
          <Text style={styles.title}>Gifts</Text>
        </View>
        <View style={styles.inFlex}>
          <View>
            <Ionicons name="people-outline" style={styles.text}></Ionicons>
          </View>
          <Text style={styles.title}>Best selling</Text>
        </View>
      </View>
      <View style={styles.sales}>
        <Text
          style={{
            fontSize: 24,
            color: "#0A1034",
            textAlign: "center",
          }}>
          Sales
        </Text>
        <View style={styles.wapper}>
          <ScrollView horizontal>
            {products.product
              .filter((items) => items.promotion.length > 0)
              .map((item) => (
                <CardProduct key={item._id} item={item} />
              ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#FDFEFF",
  },
  inSlider: {
    width: w,
    height: 200,
    marginTop: 10,
  },
  scroll: {
    width: w,
    height: 200,
  },
  img: {
    width: w,
    height: h,
    resizeMode: "contain",
    borderRadius: 5,
  },
  dot: {
    flexDirection: "row",
    position: "absolute",
    bottom: -30,
    alignSelf: "center",
  },
  textInDot: {
    color: "#f1f1f1",
    margin: 3,
    fontSize: 12,
  },
  textInDotActive: {
    color: "#888",
    margin: 3,
    fontSize: 12,
  },
  flex: {
    top: -50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inFlex: {
    backgroundColor: "#E0ECF8",
    top: 40,
    width: 80,
    height: 80,
    fontSize: 30,
    textAlign: "center",
    borderRadius: 100,
  },
  text: {
    margin: 22,
    fontSize: 35,
  },
  title: {
    fontSize: 14,
    color: "#18194E",
    textAlign: "center",
    top: 5,
  },
  wapper: {
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "space-around",
  },
  sales: {
    top: -30,
    bottom: 10,
  },
  product: {
    top: 10,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  imgProduct: {
    resizeMode: "contain",
    width: 150,
    height: 150,
  },
});
