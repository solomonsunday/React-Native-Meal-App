import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealHeader, ...styles.mealRow }}>
                        <ImageBackground source={{ uri: props.imageUrl }}
                            style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealDetail, ...styles.mealRow }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: "row",
    },
    mealItem: {
        width: "100%",
        height: 200,
        backgroundColor: "#ccc",
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        height: "15%"

    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",

    },
    titleContainer: {
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        color: 'white',
        textAlign: "center",
    }




})

export default MealItem