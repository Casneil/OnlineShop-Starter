import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigator from "./MainNavigator";


const MainStack = createStackNavigator();

const MainStackNavigator = () => {
    return (

        <MainStack.Navigator headerMode="none">
            <MainStack.Screen name="Tabs" component={MainNavigator} />
        </MainStack.Navigator>

    )
}

export default MainStackNavigator;