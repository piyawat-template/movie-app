import React, { useState, useEffect } from 'react'
import { View, Text, Image, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { tailwind } from '@styles/tailwind'
import * as utility from '@styles/utility'
import { Ionicons } from '@expo/vector-icons'

import NavTop from '@components/NavTop'
import NavBottom from '@components/NavBottom'
import Input from '@components/form/Input'

const HomeScreen = ({ navigation }) => {
    const [list, setList] = useState([])
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=c1618550083ac39008a92222d9c8a6a9&language=en-US&page=1'
                let response = await fetch(url)
                let data = await response.json()

                setList(data.results)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        console.log(keyword)
    }, [keyword])

    const renderPortraitItem = ({ index, item }) => {
        let margin = index === 0 ? 'ml-5 mr-5' : 'mr-5'

        return (
            <TouchableOpacity
                style={tailwind(`w-32 ${margin}`)}
                onPress={() => navigation.navigate('Detail', {
                    data: item
                })}
            >
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }}
                    style={tailwind('w-full h-36 rounded-2xl mb-2')}
                />
                <Text style={tailwind('text-white font-bold mb-1')}>
                    {item.title}{' '}
                    <Text style={tailwind('text-gray-500 text-xs font-bold')}>
                        ({item.release_date.split('-')[0]})
                    </Text>
                </Text>
                <View style={tailwind('flex-row items-center')}>
                    <Ionicons name="star" size={15} color="#ebcc70" />
                    <Text style={tailwind('text-gray-500 text-xs font-bold ml-1')}>
                        {item.vote_average}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderLandscapeItem = ({ index, item }) => {
        return (
            <TouchableOpacity
                style={tailwind(`w-full mb-3 flex-row items-center`)}
                onPress={() =>
                    navigation.navigate('Detail', {
                        data: item,
                    })
                }
            >
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }}
                    style={tailwind('w-28 h-34 rounded-2xl mr-3')}
                />
                <View style={tailwind('flex-1')}>
                    <Text style={tailwind('text-white font-bold mb-1')}>
                        {item.title}{' '}
                        <Text style={tailwind('text-gray-500 text-xs font-bold')}>
                            ({item.release_date.split('-')[0]})
                        </Text>
                    </Text>
                    <View style={tailwind('flex-row items-center mb-1')}>
                        <Ionicons name="star" size={15} color="#ebcc70" />
                        <Text style={tailwind('text-gray-500 text-xs font-bold ml-1')}>
                            {item.vote_average}
                        </Text>
                    </View>
                    <Text style={tailwind('text-gray-500 text-xs')} numberOfLines={2}>
                        {item.overview}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={[utility.styles.container, tailwind('h-full bg-black')]}>
            <NavTop />
            <View style={tailwind('px-5 mb-6')}>
                <Input
                    placeholder="Search"
                    right={<Ionicons name="search-outline" size={20} color="white" />}
                    onInputChange={(text) => setKeyword(text)}
                />
            </View>
            <ScrollView>
                <View style={tailwind('px-5')}>
                    <Text style={tailwind('text-white text-xl font-bold mb-2')}>In theatre</Text>
                </View>
                <View style={tailwind('mb-8')}>
                    <FlatList
                        horizontal
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        snapToAlignment="center"
                        data={list}
                        renderItem={renderPortraitItem}
                        keyExtractor={(item) => `theatre-card-${item.id}`}
                    />
                </View>

                <View style={tailwind('px-5 pb-5')}>
                    <Text style={tailwind('text-white text-xl font-bold mb-2')}>Trending</Text>
                    <FlatList
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        snapToAlignment="center"
                        data={list}
                        renderItem={renderLandscapeItem}
                        keyExtractor={(item) => `theatre-card-${item.id}`}
                    />
                </View>
            </ScrollView>
            <NavBottom navigation={navigation} />
        </SafeAreaView>
    )
}

export default HomeScreen