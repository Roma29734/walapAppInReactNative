import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 350,
        flexDirection: 'column',
        marginHorizontal: 12,
        marginVertical: 12,
        borderRadius: 16,
    },
    container: {
        width: '100%',
        height: '100%',
    },
    buttonDownload: {
        width: 120,
        height: 48,
        marginBottom: 16,
        alignSelf: 'center',
        marginHorizontal: 'auto',
        borderRadius: 32,
        backgroundColor: '#000000'
    },
    textDownload: {
        fontSize: 16,
        top: '25%',
        textAlign: 'center',
        color: '#fff',
    },
    imageDownload: {
        height: 48,
        width: 48,
    }
})

export default styles