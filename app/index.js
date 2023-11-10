import {View, Text, SafeAreaView, StatusBar} from "react-native";
import React from "react";
import {router, Stack, useRouter} from "expo-router";

const Page = () => {
    return (<SafeAreaView style={{flex: 1, backgroundColor: "#e3aa1a"}}>
        
        <Stack.Screen
            options={{
            headerStyle: {backgroundColor: "#e3aa1a"},
                headerShadowVisible: false,
            }}
        />
        <View>
            <Text>Hellow world</Text>
        </View>
    </SafeAreaView>
    );
};

export default Page;