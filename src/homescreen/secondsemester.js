import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const uni = [
    { name: "swe 4503" },
    { name: "swe 4507" },
    { name: "swe 4557" },
    { name: "swe 4501" },
    { name: "swe 4502 " },
  ];


  return (
    <View style={styles.viewStyle}>
      <FlatList
        style={styles.ListStyle}
        data={uni}
        renderItem={function ({ item }) {
          //there is an error "Text strings must be rendered within a <Text> component"
          return <Text style={styles.textStyle}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
    marginVertical: 30,
  },
  viewStyle: {
    borderColor: "red",
    borderWidth: 5,
  },
  ListStyle: {},
});

export default ListScreen;