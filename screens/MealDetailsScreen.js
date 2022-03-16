import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react';
import AppLoading from 'expo-app-loading';

const MealDetailsScreen = (props) => {
    return (
        <>
            {/* <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoader(true)}
                onError={(err) => console.log(err)}
            /> */}
            <View style={styles.screen}>
                <Text>Meal Detail Screen</Text>
                <Button title="Back to top" onPress={() => {
                    props.navigation.popToTop();
                }} />
            </View>
        </>
    )
}


const styles = StyleSheet.create({

    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default MealDetailsScreen