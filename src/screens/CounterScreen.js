import React, { useReducer } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const styles = StyleSheet.create({});

const reducer = (state, action) => {
  if (action.type === "change_count") {
    return { ...state, count: state.count + action.payload };
  } else {
    return state;
  }
};

const CounterScreen = (props) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        title="increase"
        onPress={() => {
          dispatch({ type: "change_count", payload: 1 });
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          dispatch({ type: "change_count", payload: -1 });
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

export default CounterScreen;
