import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button onPress={() => navigation.navigate("Components")} title="Go to components demo" />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to lists demo</Text>
      </TouchableOpacity>
      <Button onPress={() => navigation.navigate("Image")} title="Go to Image demo" />
      <Button onPress={() => navigation.navigate("Counter")} title="Go to Counter demo" />
      <Button onPress={() => navigation.navigate("Color")} title="Go to Color Screen" />
      <Button onPress={() => navigation.navigate("Square")} title="Go to Square Screen" />
      <Button onPress={() => navigation.navigate("Text")} title="Go to Text Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
