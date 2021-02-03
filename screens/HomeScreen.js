import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { tailwind } from '@styles/tailwind'
import * as utility from '@styles/utility'

import Navtop from '@components/Navtop'

const HomeScreen = () => {
    return (
        <SafeAreaView style={[utility.styles.container, tailwind('h-full bg-black')]}>
            <Navtop />
        </SafeAreaView>
    )
}

export default HomeScreen