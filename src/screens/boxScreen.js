import React, { useState } from "react";
import { View, Button, Text, StyleSheet, FlatList, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  );
};

//code below gives the styles {position: absolute, top: 0, right: 0, left: 0, bottom: 0}
//...StyleSheet.absoluteFillObject,

const styles = StyleSheet.create({
  viewStyle: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  textTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    /* alignSelf: "flex-end", */
    top: 50,
  },
  textThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});

export default BoxScreen;
