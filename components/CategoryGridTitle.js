import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native'
import React from 'react'

const CategoryGridTitle = (props) => {
    const TouchableCom = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCom = TouchableNativeFeedback
    }
    return (
        <View style={styles.gridItem} >
            <TouchableCom style={{ flex: 1 }} onPress={() => {
                props.onSelect()
            }}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }} >
                    <Text style={styles.title} noOfLines={2}>{props.title}</Text></View >
            </TouchableCom>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'

    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'

    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right',
    }

})

export default CategoryGridTitle