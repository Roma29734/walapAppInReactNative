import {SafeAreaView, View} from "react-native";
import {Stack} from "expo-router";
import {Home} from "../screen/home/Home";

export default function App() {
    return(
        <SafeAreaView style={{flex:1, backgroundColor: "#e3aa1a"}}>
            <Stack.Screen
            options={{
                headrStyle: {backgroundColor: "#e3aa1a"},
                headerShadowVisible: false,
            }}
            />
            
            <View style={{flex:1, width: "100%", height: "100%", backgroundColor: "#e3aa1a"}}>
                <Text style={{fontSize: 25}}>This is home page</Text>
            </View>
        </SafeAreaView>
    )
}