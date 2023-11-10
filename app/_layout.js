import {useCallback} from "react";
import {SplashScreen, Stack} from "expo-router";

SplashScreen.preventAutoHideAsync()
const Layout = (callback, deps) => {
    const onLayoutRootView = useCallback(async () => {
        await SplashScreen.hideAsync()
    }, deps)
    return<Stack onLayout={onLayoutRootView}/>;
}
export default Layout;