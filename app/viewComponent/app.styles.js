import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        height: 350,
        marginHorizontal: 16,
        marginVertical: 16,
        borderRadius: 16,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerUpBar: {
        flex: 1,
        width: '100%',
        height: 50,
    },
    containerImageItem: {
        marginTop: 8,
    },
    mainTitleText: {
        fontSize: 24,
        backgroundColor: "#000000",
    }
})

export default styles;