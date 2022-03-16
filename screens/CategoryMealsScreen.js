import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen</Text>
            <Button title="Meal Detail" onPress={() => {
                props.navigation.navigate({ routeName: "MealDetail" })
            }} />
            <Text>{selectedCategory.title}</Text>
            <Button title="Go back" onPress={() => {
                props.navigation.goBack()
            }} />
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

export default CategoryMealsScreen