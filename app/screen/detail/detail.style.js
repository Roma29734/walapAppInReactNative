import {StyleSheet} from "react-native";

const styles=  StyleSheet.create({
    image: {
        flex: 1,
        height: 350,
        flexDirection: 'column',
        marginHorizontal: 12,
        marginVertical: 12,
    },
    container: {
        width: '100%',
        height: '100%',
    },
    buttonDownload: {
        width: 48,
        height: 48,
        borderRadius: 32,
        backgroundColor: '#000000'
    },
    imageDownload: {
        height: 48,
        width: 48,
    }
})

export default styles