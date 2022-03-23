import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, Animated } from 'react-native';

const w = Dimensions.get("screen").width
const h = w *0.6
const w4 = w /4 

const images = [
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80',
        'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
     ]



export default function Home({ navigation, route }) {

  const [active, setActive] = useState(0)

  const handleScroll = (event) => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
    if(slide !== active){
      setActive(slide)
    }
  }

  return (
      <View>
        <View style={styles.inSlider}>
            
            <ScrollView 
              pagingEnabled 
              horizontal 
              style={styles.scroll}
              onScroll={
                event => {
                  const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width)
                  if(slide !== active){
                    setActive(slide)
                  }
                }
              }
            >
            {
                images.map((image, index) => (
                    <Image 
                        key={index}
                        source={{
                            uri: 
                            image
                        }}
                        style={styles.img}
                    />
                ))
            }
            </ScrollView>
        
            <View style={styles.dot}> 
            {
              images.map((i, k) => (
                <Text key={k} style={k==active ? styles.textInDotActive : styles.textInDot}>⬤</Text>
              ))
            }
                
            </View>
        </View>


        <View style={styles.flex}> 
          <View style={styles.inFlex}>
            <Text>1</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    
  },
  inSlider: { 
    marginTop: 10, 
    width: w, 
    height:200,
    },
    scroll:
    {
        width:w, 
        height:200,
    },
  img: {
    width: w, 
    height: h,
    resizeMode:'cover',
    borderRadius: 5,
  },
  dot: {
    flexDirection: 'row',
    position:'absolute',
    bottom: -20,
    alignSelf: 'center',
  },
  textInDot: {
      color: '#888',
      margin: 3,
  },
  textInDotActive: {
    color: '#fff',
    margin: 3,
  },
  flex: {
    
  },
  inFlex: {
    backgroundColor: '#000',
    width: 30,
    margin: 10,
    padding: 20,
    fontSize: 30,
    textAlign: 'center',
  }
});








// import React, { Component } from "react";
// import { 
//     StyleSheet, 
//     View,
//     Text
// } from "react-native";

// import { SliderBox } from "react-native-image-slider-box";

// export default class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: [
//         "https://source.unsplash.com/1024x768/?nature",
//         "https://source.unsplash.com/1024x768/?water",
//         "https://source.unsplash.com/1024x768/?girl",
//         "https://source.unsplash.com/1024x768/?tree",
//       ]
//     };
//   }

//   render() {

//     const images = [
//         'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
//         'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80',
//         'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
//     ]

//     return (
//       <View style={styles.container}>
//       <Text></Text>
//         <SliderBox
//             images={this.state.images}
//             onCurrentImagePressed={index =>
//                 console.warn(`image ${index} pressed`)
//             }
//             sliderBoxHeight={200}
//             paginationBoxVerticalPadding={20}
//             autoplay
//             circleLoop
//             ImageComponentStyle={{
//                 borderRadius: 15, 
//                 width: '97%', 
//                 marginTop: 5, 
//                 height: 150,
//             }}
//             dotStyle={{
//                 marginTop: 20,
//             }}
//         />

//         <Image
//             source={require('https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')}
            
//             />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });