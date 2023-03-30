import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const styles = StyleSheet.create({});

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="forest"
        source={require("../../assets/images/forest.jpg")}
        score={10}
      />
      <ImageDetail
        title="beach"
        source={require("../../assets/images/beach.jpg")}
        score={10}
      />
      <ImageDetail
        title="mountain"
        source={require("../../assets/images/mountain.jpg")}
        score={10}
      />
    </View>
  );
};

export default ImageScreen;
