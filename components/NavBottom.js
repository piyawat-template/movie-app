import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { tailwind } from '@styles/tailwind'

const NavBottom = ({ navigation }) => {
    return (
        <View
            style={tailwind(
                `bg-dark-100 h-16 flex-row items-center justify-around rounded-tl-xl rounded-tr-xl`,
            )}
        >
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="heart-outline" size={24} style={tailwind(`text-gray-600`)} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="person-outline" size={24} style={tailwind(`text-gray-600`)} />
            </TouchableOpacity>
        </View>
    )
}

export default NavBottom
