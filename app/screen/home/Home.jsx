import useRequest from "../../dataComponent/useRequest"
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native";
import styles from "./home.style"
import ImageItem from "../../viewComponent/imageItem/ImageItem";
import {Link, useRouter} from "expo-router";
import UpBar from "../../viewComponent/upBar/UpBar";

export const Home = () => {
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

//    displays images wallpaper from data base
    return (
        <View style={styles.contrainer}>
            <FlatList
                data={items}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() =>
                        router.push({ pathname: '/screen/detail/Detail' })}
                    >
                        <ImageItem imageUrl={item.urls.small}/>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}