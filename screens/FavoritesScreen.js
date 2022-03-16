import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FavoritesScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Favorite Screen</Text>
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

export default FavoritesScreen