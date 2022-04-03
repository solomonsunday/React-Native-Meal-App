import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as font from 'expo-font';
import { AppLoaing } from 'expo';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import MealsNavigation from './navigation/MealsNavigation';
import { enableScreens } from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
  return font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}
export default function App() {
  const [fontloaded, setFontLoaded] = useState(false);

  if (!fontloaded) {
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err)}
    />
  }


  return (<MealsNavigation />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
