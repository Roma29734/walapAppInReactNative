import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {Home} from "./home/Home";
import {Detail} from "./detail/Detail";
import {NavigationContainer} from "@react-navigation/native";


const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={Home} />
                <Stack.Screen name='DetailScreen' component={Detail} />
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}
