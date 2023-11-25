import {View, Text, Image, Platform, Button, Alert, TouchableOpacity,} from "react-native";
import styles from "./detail.style"
import {Stack, useLocalSearchParams, useRouter} from "expo-router";

const Detail = () => {
    const router = useRouter()
    const params = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Detail'
                }}
            />
            <Image source={{uri: params.Detail}} style={styles.image}/>
            <TouchableOpacity style={styles.buttonDownload} onPress={ () =>
                router.push('/screen/(tabsHome)/topPhoto')
            }>
                <Text style={styles.textDownload}>Download</Text>
            </TouchableOpacity>

        </View>
    );
}
export default Detail;