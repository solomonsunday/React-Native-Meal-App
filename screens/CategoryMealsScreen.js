import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import { FlatList } from 'react-native-gesture-handler'
import Meal from '../models/meal'
import MealItem from '../components/MealItem'

const CategoryMealsScreen = (props) => {
    const renderMealItem = (itemData) => {
        return (<MealItem title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            imageUrl={itemData.item.imageUrl}
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: "MealDetail",
                    params: {
                        mealId: itemData.item.id
                    }
                })
            }} />)
    }
    const catId = props.navigation.getParam('categoryId')

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
    console.log(displayedMeals, "displayed Meal");
    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: "100%" }} />
            {/* <Text>The Category Meals Screen</Text> */}
            {/* <Button title="Meal Detail" onPress={() => {
            }} />
            <Text>{selectedCategory.title}</Text>
            <Button title="Go back" onPress={() => {
                props.navigation.goBack()
            }} /> */}
        </View>
    )
}

//getting data dynamically from outside the component.
CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default CategoryMealsScreen