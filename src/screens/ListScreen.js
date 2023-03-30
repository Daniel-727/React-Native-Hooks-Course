import React from "react";
import { FlatList, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    names:{
        fontSize: 50,
    },
    textStyle:{
        marginVertical: 20,
    }
});

const ListScreen = () => {

    const friends = [
        { name: "daniel", age: 29},
        { name: "abby", age: 19},
        { name: "thomas", age: 30},
        { name: "esther", age: 23},
        { name: "david", age: 23},
        { name: "angela", age: 25},
        { name: "brandon", age: 26},
        { name: "vincent", age: 29},
        { name: "isaac", age: 19},
        { name: "jayden", age: 16},
        { name: "lindsay", age: 13},
    ];

    const renderItem = ({item}) => {
        return(
            <View style={styles.textStyle}>
                <Text style={styles.names}>{item.name}</Text>
                <Text style={styles.names}>{item.age}</Text>
            </View>
        );
    };

    return(
        <FlatList data={friends} renderItem={renderItem} keyExtractor={(friend) => friend.name} />
    );
};

export default ListScreen;