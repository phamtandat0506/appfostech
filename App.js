import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchHome from "./components/Search/SearchHome/SearchHome";

export default function App() {
  return (
    <View style={styles.container}>
      <SearchHome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 20,
    backgroundColor: "#FDFEFF",
  },
});
