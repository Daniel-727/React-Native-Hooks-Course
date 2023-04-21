import React, { useState } from "react";
import { View, Button, Text, StyleSheet, FlatList, TextInput } from "react-native";

//look at autoCapitalize and autoCorrect props for TextInput to review
//onChangeText is a default TextInput prop

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 6 ? <Text>Password must be longer than 5 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
