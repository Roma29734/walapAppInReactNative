import {View, Text, Image} from "react-native";
import styles from "./detail.style"
import {Stack} from "expo-router";

const Detail = () => {


    return (
        <View style={styles.container}>
        <Stack.Screen
            options={{
            title: 'Detail'
        }}
        />
            <Text>Detail screens</Text>
            {/*<Image style={styles.image} source={{uri: urls}}/>*/}
        </View>
    );
}
export default Detail;