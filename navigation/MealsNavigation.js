import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import { Platform } from 'react-native';
import Color from '../constant/Color';


const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen, navigationOptions: {
            headerTitle: 'Meal Component'
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailsScreen
}, {
    mode: 'modal',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Color.primaryColor : "",
        },
        headerTintColor: Platform.OS === 'android' ? "white" : "black"
    }
})

export default createAppContainer(MealsNavigator)