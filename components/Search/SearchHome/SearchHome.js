import * as React from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import LastView from "./LastView";
import LatedSearch from "./LatedSearch";

const SearchHome = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* <Text style={styles.navigationTitle}>Search</Text> */}
        <Searchbar
          style={styles.search}
          placeholder="What are you looking for ?"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <LastView />

        <LatedSearch />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 20,
    backgroundColor: "#FDFEFF",
  },

  wrapper: {},
  search: {
    backgroundColor: "#E0ECF8",
    borderRadius: 21.5,
    color: "#1F53E4",
  },
  navigationTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#0A1034",
    marginBottom: 32,
    marginTop: 56 - (StatusBar.currentHeight || 20) - 20,
  },
});
// Hieu cach cat chua
//chua hiêu chỗ đó
// trong desgin thấy là 56 chưa
//chua
//rr, thi 46 la tong cong, nhung ben ngoai app da la 20 roi
// tru them con cai container 20 nua
// Copy nhung thu minh can, ko phai copy cai position
// tuyet doi ko copy position, top, left, width, height => ko responsive dc
//đau đầu vá
//toang. nhìn design làm theo, chứ ko phải copy y nguyên cái css
// boi vay nen 1 man nay cat + ghep api = 1tr500k tien cong
// 1 man 1tr500k, 20 man, freelancer lay 1tr5*20=30tr
//anh tính ghê vá tiền ko v em làm free
// anh dang lam day :|
// lam tiep di, anh hoi bận
//c.on anh khi nào gặp ae mình nhậu bữa
// chac con lau, dao nay a hoi ban thoi nha pp
//chào anh
export default SearchHome;
