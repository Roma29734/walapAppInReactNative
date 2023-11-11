import {Stack} from "expo-router";

// this is file satisfy of expo-router
const Layout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: 'index'
                }}
            />
        </Stack>
    )
}
export default Layout;