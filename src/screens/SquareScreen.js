import React, { useReducer } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //action === {colorToChange: 'red', amount: 15}

  switch (action.colorToChange) {
    case "red":
      if (state.red + action.colorToChange > 255 || state.red + action.colorToChange < 0) {
        return state;
      } else {
        return { ...state, red: state.red + action.amount };
      }
    case "green":
      return state.green + action.colorToChange > 255 || state.green + action.colorToChange < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.colorToChange > 255 || state.blue + action.colorToChange < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
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
        onIncrease={() => dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })}
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
