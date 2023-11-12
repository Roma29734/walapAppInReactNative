import {Stack} from "expo-router";
import {useFonts} from "expo-font";

// this is file satisfy of expo-router
const Layout = () => {


    const [fontsLoaded] = useFonts({
        MNBold: require("../assets/fonts/Montserrat-Bold.ttf"),
        MNMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
        POPRegular: require("../assets/fonts/Poppins-Black.ttf"),
        RALSEMIBOLD: require("../assets/fonts/Raleway-SemiBold.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: 'Walap',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 20,
                    }
                }}
            />
        </Stack>
    )
}
export default Layout;