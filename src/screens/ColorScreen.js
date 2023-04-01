import React, { useState } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";

//used for generating random colors
const colorGenerator = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  //generating multiple squares with random colors
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, colorGenerator()]);
        }}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
        keyExtractor={(index) => {
          return index;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
