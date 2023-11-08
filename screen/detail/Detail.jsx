import {View, Text, Image} from "react-native";
import styles from "./detail.style"

export const Detail = () => {

//    const {urls} = route.params;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: urls}}/>
        </View>
    );
}