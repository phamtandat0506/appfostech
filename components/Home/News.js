//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../../Redux/actions/newsAction";
import { WebView } from "react-native-webview";

// create a component
const News = () => {
  const [isTech, setTech] = useState(false);
  const { news } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsData());
  }, [dispatch]);

  const handleNews = () => {
    setTech(true);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#0A1034",
          fontSize: 24,
          fontWeight: "700",
          top: 0,
          padding: 10,
        }}>
        News
      </Text>
      <View style={styles.menuNews}>
        <Text style={styles.textMenu1} onPress={handleNews}>
          Technology
        </Text>
        <Text style={styles.textMenu}>Laptop</Text>
        <Text style={styles.textMenu}>Game</Text>
      </View>
      {news.news.map((item) => (
        <View style={styles.Card} key={item._id}>
          <Image
            style={styles.imageNews}
            source={{
              uri: `https://api.fostech.vn/`.concat(`${item.picture}`),
            }}
          />
          <View style={styles.body}>
            <Text>{item.title}</Text>
            <WebView
              originWhitelist={["*"]}
              source={{ html: `${item.content}` }}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFEFF",
  },
  textMenu1: {
    margin: 10,
    color: "#0d2cd9",
  },
  menuNews: {
    flexDirection: "row",

    alignSelf: "center",
  },
  textMenu: {
    margin: 10,
  },
  Card: {
    flexDirection: "row",
    padding: 20,
  },

  imageNews: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 20,
  },
  body: {
    margin: 20,
  },
});

//make this component available to the app
export default News;
