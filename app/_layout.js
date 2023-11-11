import {Stack} from "expo-router";

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