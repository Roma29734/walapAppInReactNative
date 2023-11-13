import {View, Text, Image} from "react-native";
import styles from "./detail.style"
import {Stack, useLocalSearchParams} from "expo-router";
import Toast from "react-native-root-toast";

const Detail = () => {

    const params = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Detail'
                }}
            />
            <Image source={{uri: params.Detail}} style={styles.image}
            />
        </View>
    );
}
export default Detail;