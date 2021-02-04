import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { tailwind } from '@styles/tailwind'

const NavTop = () => {
    return (
        <View style={tailwind('py-6 px-5 flex-row items-center justify-between')}>
            <Text style={tailwind('text-white text-2xl font-bold')}>Movies</Text>
            <TouchableOpacity>
                <Image
                    source={{ uri: `http://unsplash.it/100/100?random&gravity=center` }}
                    style={tailwind('w-9 h-9 rounded-full')}
                />
            </TouchableOpacity>
        </View>
    )
}

export default NavTop
