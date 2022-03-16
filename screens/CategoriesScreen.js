import { View, Text, StyleSheet, Button, FlatList, ViewBase, TouchableOpacity, Platform } from 'react-native'
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import Color from '../constant/Color';

const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (<TouchableOpacity style={styles.gridItem} onPress={() => {
            props.navigation.navigate({
                routeName: "CategoryMeals",
                params: {
                    categoryId: itemData.item.id
                }
            });
        }}>
            <View ><Text>{itemData.item.title}</Text></View >
        </TouchableOpacity>
        );
    };


    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Color.primaryColor : "",
    },
    headerTintColor: Platform.OS === 'android' ? "white" : "black"
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,

    }
})

export default CategoriesScreen