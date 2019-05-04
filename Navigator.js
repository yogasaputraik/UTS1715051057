import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './MainMenu';
import BMI from './BMI';
import Tentang from './AboutMe';
import Kurs from './Kurs';

const AppNavigator = createStackNavigator(
 {
    Utama: MainScreen,
    BMI:BMI,
    Tentang:Tentang,
    Kurs:Kurs
    },
    
    {
    initialRouteName: "Utama"
    }
 );
export default createAppContainer(AppNavigator);