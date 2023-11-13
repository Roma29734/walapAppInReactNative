import {View, Text, Image} from "react-native";
import styles from "./detail.style"
import {Stack, useLocalSearchParams} from "expo-router";

const Detail = () => {

    const params = useLocalSearchParams();


    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Detail'
                }}
            />
            <Image source={{uri: params.Detail}} style={styles.image} onLoadEnd={}/>
        </View>
    );
}
export default Detail;