import {Image, View} from "react-native";
import styles from "../app.styles";

const ImageItem = ({imageUrl}) => {

    return (
        <View style={styles.containerImageItem}>

            <Image
                style={styles.logo}
                source={{
                uri: imageUrl
            }}
            />

        </View>
        )

}

export default ImageItem;