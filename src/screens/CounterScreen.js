import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, } from 'react-native';

const styles = StyleSheet.create({

})

const CounterScreen = (props) => {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Button title='increase' onPress={() => {setCount(count + 1)}}/>
            <Button title='decrease' onPress={() => {setCount(count - 1)}}/>
            <Text>Current Count: {count}</Text>
        </View>
    );
};

export default CounterScreen;