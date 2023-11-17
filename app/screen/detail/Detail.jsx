import {View, Text, Image, Platform, Button, Alert, TouchableOpacity, Linking} from "react-native";
import styles from "./detail.style"
import {Stack, useLocalSearchParams} from "expo-router";
import * as MediaLibrary from 'expo-media-library';
import {Camera} from "expo-camera";
import {useEffect} from "react";

const Detail = () => {

    const params = useLocalSearchParams();


    const savePhotoToGallery = async () => {
        const {status} = await Camera.getCameraPermissionsAsync();

        if (status !== 'granted') {
            console.log('Permission not granted!');
            Alert.alert("erar", `Permission not granted! ${status}`, "pizdech", "eban");
            return;
        }

        const photoUri = 'https://images.unsplash.com/photo-1682687219356-e820ca126c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTg3Nzh8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwMDE2NDY0MHw&ixlib=rb-4.0.3&q=80&w=1080';

        const asset = await MediaLibrary.createAssetAsync(photoUri);
        const album = await MediaLibrary.getAlbumAsync('Camera Roll');

        if (album) {
            await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
            console.log('Photo saved to gallery!');
        } else {
            console.log('Unable to save photo to gallery!');
        }
    }


    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Detail'
                }}
            />
            <Image source={{uri: params.Detail}} style={styles.image}/>

            <TouchableOpacity style={styles.buttonDownload} onPress={savePhotoToGallery}>
                {/*<Image source={require('../../../assets/ic_download.svg')} style={styles.imageDownload}/>*/}
                <Text style={styles.textDownload}>Download</Text>
            </TouchableOpacity>


        </View>
    );
}
export default Detail;