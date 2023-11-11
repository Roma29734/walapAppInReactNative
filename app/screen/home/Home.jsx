import useRequest from "../../dataComponent/useRequest"
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native";
import styles from "./home.style"
import ImageItem from "../../viewComponent/imageItem/ImageItem";
import {Link} from "expo-router";

export const Home = () => {
    const {items, isLoading} = useRequest({});

    if (isLoading) {
        return (
            <View style={styles.loadingAlert}>
                <ActivityIndicator size={"large"}/>
                <Text>Идет загрузка</Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={items}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => {
                        
                    }}>
                        <ImageItem imageUrl={item.urls.small}/>
                    </TouchableOpacity>
                )}
            />
            <Link href="../detail/Detail.jsx">Open Detail</Link>
        </View>

    )
}