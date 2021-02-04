import React from 'react'
import { View, TextInput } from 'react-native'
import { tailwind } from '@styles/tailwind'

const Input = ({ onInputChange, placeholder, right }) => {
    return (
        <View style={tailwind('bg-dark-50 rounded-full py-2 px-5 flex-row items-center')}>
            <TextInput
                style={tailwind('flex-1 text-white')}
                placeholder={placeholder}
                placeholderTextColor="white"
                onChangeText={(text) => onInputChange(text)}
            />
            {right}
        </View>
    )
}

export default Input
