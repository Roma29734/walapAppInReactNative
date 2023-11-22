import {Image, View} from "react-native";
import styles from "../app.styles";


const ImageItem = ({imageUrl}) => {

    return (

        <Image
            style={styles.logo}
            source={{
                uri: imageUrl
            }}
        />

    )

}

export default ImageItem;