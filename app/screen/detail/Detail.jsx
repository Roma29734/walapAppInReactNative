import {View, Text, Image, Platform, Button, Alert, TouchableOpacity} from "react-native";
import styles from "./detail.style"
import {Stack, useLocalSearchParams} from "expo-router";
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';

const Detail = () => {

    const params = useLocalSearchParams();


    const savePhotoToGallery = async () => {
        const {status} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (status !== 'granted') {
            console.log('Permission not granted!');
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
            {/*<Button title='Download' onPress={async () => {*/}
            {/*    // await MediaLibrary.getPermissionsAsync()*/}
            {/*    // await MediaLibrary.saveToLibraryAsync(`file:///mnt/sdcard/photo.png/${params.Detail}`,);*/}
            {/*}}/>*/}
            <Button title='Awloda' onPress={
                savePhotoToGallery
            }/>
            {/*<TouchableOpacity style={styles.buttonDownload}>*/}
            {/*    <Image source={require('../../../assets/ic_download.svg')} style={styles.imageDownload}/>*/}
            {/*</TouchableOpacity>*/}


        </View>
    );
}
export default Detail;