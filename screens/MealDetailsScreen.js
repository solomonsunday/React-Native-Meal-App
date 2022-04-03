import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react';
import AppLoading from 'expo-app-loading';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <>
            {/* <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoader(true)}
                onError={(err) => console.log(err)}
            /> */}
            <View style={styles.screen}>
                <Text>{selectedMeal.title}</Text>
                <Button title="Back to Categories" onPress={() => {
                    props.navigation.popToTop();
                }} />
            </View>
        </>
    )

    MealDetailsScreen.navigationOptions = (navigationData) => {
        const mealId = navigationData.navigation.getParam('mealId');
        const selectedMeal = MEALS.find(meal => meal.id === mealId);

        return {
            headerTitle: selectedMeal.title
        };
    };
}


const styles = StyleSheet.create({

    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default MealDetailsScreen