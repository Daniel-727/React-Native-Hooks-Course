import React from "react";
import { Text, StyleSheet, View } from "react-native";

let condition = false;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

const myName =
  condition === true ? (
    <Text>Daniel Li</Text>
  ) : (
    <Text style={styles.subHeaderStyle}>Abner Chou</Text>
  );

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the Components Screen</Text>
      {myName}
    </View>
  );
};

export default ComponentsScreen;
