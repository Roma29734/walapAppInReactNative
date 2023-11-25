import React from "react";
import {Redirect} from "expo-router";

const Page = () => {
//on this page we display the home page
    return (
        <Redirect href="screen/(tabsHome)"/>
    );
};

export default Page;