import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  //console.log(props);
  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      

      <Button
        title="list of faculty member"
        onPress={function () {
          props.navigation.navigate("faculty");
        }}
      />

      <Button
        title="semester wise course list"
        onPress={function () {
          props.navigation.navigate("courselist");
        }}
      />
      <Button
        title="State Screen"
        onPress={function () {
          props.navigation.navigate("State");
        }}
      />
      <Button
        title="My profile "
        onPress={function () {
          props.navigation.navigate("profiel");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
});

export default HomeScreen;
