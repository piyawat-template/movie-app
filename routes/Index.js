import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import {
    createStackNavigator,
    TransitionSpecs,
    HeaderStyleInterpolators,
} from '@react-navigation/stack'

import HomeScreen from '@screens/HomeScreen'
import DetailScreen from '@screens/DetailScreen'

const options = {
    headerShown: false,
}

const RootStack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <RootStack.Navigator>
                <RootStack.Screen name="Home" component={HomeScreen} options={{ ...options }} />
                <RootStack.Screen name="Detail" component={DetailScreen} options={{ ...options }} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator