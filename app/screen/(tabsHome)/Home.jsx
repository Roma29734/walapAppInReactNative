import useRequest from "../../dataComponent/useRequest"
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native";
import styles from "../../viewComponent/home.style"
import ImageItem from "../../viewComponent/imageItem/ImageItem";
import {Link, useRouter} from "expo-router";

const Home = () => {
//    component from expo-router
    const router = useRouter()
//    component from response to data base
    const {items, isLoading} = useRequest({});

//    displays loading fragment in data base
    if (isLoading) {
        return (
            <View style={styles.loadingAlert}>
                <ActivityIndicator size={"large"}/>
                <Text>Идет загрузка</Text>
            </View>
        )
    }

//    displays images wallpaper from dataBase
    return (
        <FlatList
            style={styles.contrainer}
            data={items}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() =>
                    router.push({pathname: '/screen/detail/Detail/', params: {Detail: item.urls.full} })

                }
                >
                    <ImageItem imageUrl={item.urls.small}/>
                </TouchableOpacity>
            )}
            numColumns={2}
        />
    )
}

export default Home;