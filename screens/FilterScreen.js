import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FilterScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Category Meals Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default FilterScreen