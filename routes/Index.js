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

const StackTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                    {
                        scale: next
                            ? next.progress.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: [1, 0.9],
                              })
                            : 1,
                    },
                ],
                opacity: next
                    ? next.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 0.75],
                      })
                    : 1,
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                }),
            },
        }
    },
}

const options = {
    headerShown: false,
    ...StackTransition,
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