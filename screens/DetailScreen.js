import React, { useState, useEffect } from 'react'
import { View, Text, Image, SafeAreaView, FlatList, ScrollView } from 'react-native'
import { tailwind } from '@styles/tailwind'
import * as utility from '@styles/utility'
import { Ionicons } from '@expo/vector-icons'

import NavTop from '@components/NavTop'
import NavBottom from '@components/NavBottom'
import Input from '@components/form/Input'

const DetailScreen = ({ navigation, route }) => {
    const { data } = route.params

    return (
        <SafeAreaView style={[utility.styles.container, tailwind('h-full bg-black')]}>
            <NavTop />
            <ScrollView style={{ flex: 1 }}>
                <View style={tailwind(`w-full mb-3 flex-row items-center px-5`)}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w200/${data.poster_path}` }}
                        style={tailwind('w-36 h-44 rounded-2xl mr-3')}
                    />
                    <View style={tailwind('flex-1')}>
                        <Text style={tailwind('text-white font-bold mb-1')}>
                            {data.title}{' '}
                            <Text style={tailwind('text-gray-500 text-xs font-bold')}>
                                ({data.release_date.split('-')[0]})
                            </Text>
                        </Text>
                        <Text style={tailwind('text-gray-500 text-xs mb-1')}>{data.overview}</Text>
                        <View style={tailwind('flex-row items-center')}>
                            <Ionicons name="star" size={15} color="#ebcc70" />
                            <Text style={tailwind('text-gray-500 text-xs font-bold ml-1')}>
                                {data.vote_average}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <NavBottom navigation={navigation} />
        </SafeAreaView>
    )
}

export default DetailScreen
