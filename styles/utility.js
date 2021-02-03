import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

const { width, height } = Dimensions.get('window')
const dimensions = {
    width: width,
    height: height,
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
})

export { dimensions, styles }