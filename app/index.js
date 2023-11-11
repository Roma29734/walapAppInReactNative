import {View, Text, SafeAreaView, StatusBar, Button} from "react-native";
import React from "react";
import {Link, Stack, useRouter} from "expo-router";
import {Home} from "./screen/home/Home";

const Page = () => {
    const router = useRouter()
    return (
        <Home/>
//        <View>
//            <Button title={"press to navigate"} onPress={() => {
//                router.push('/screen/detail/Detail')
//            }}/>
//            <Link href={'/prob'} asChild>
//                <Button title="link"/>
//            </Link>
//        </View>
    );
};

export default Page;