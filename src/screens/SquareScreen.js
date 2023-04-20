import React, { useReducer } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //action === {type: 'change_red', payload: 15}

  switch (action.type) {
    case "change_red":
      if (state.red + action.payload > 255 || state.red + action.payload < 0) {
        return state;
      } else {
        return { ...state, red: state.red + action.payload };
      }
    case "green":
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "blue":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  //generating one square in which we can alter the color
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: "change_red", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: "change_green", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: "change_blue", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
