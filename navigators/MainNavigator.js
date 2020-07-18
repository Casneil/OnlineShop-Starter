import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Shoes from "../screens/Shoes";
import Cart from "../screens/Cart";


const WelcomeStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ShoesStack = createStackNavigator();
const CartStack = createStackNavigator();

const MainStack = createStackNavigator();



const WelcomeStackNavigator = () => {
    return (
        <WelcomeStack.Navigator headerMode="none" >
            <WelcomeStack.Screen options={{
                title: "Welcome",
            }} name="Welcome" component={Welcome} />
        </WelcomeStack.Navigator>
    )
}

const HomeStackNavigator = () => {

    return (
        <HomeStack.Navigator headerMode="none" >
            <HomeStack.Screen options={{
                title: "Home"
            }} name="Home" component={Home} />
        </HomeStack.Navigator>
    )
}

const ShoesStackNavigator = () => {

    return (
        <ShoesStack.Navigator headerMode="none" >
            <ShoesStack.Screen options={{
                title: "Shoes"
            }} name="Shoes" component={Shoes} />
        </ShoesStack.Navigator>
    )
}

const CartStackNavigator = () => {

    return (
        <CartStack.Navigator headerMode="none" >
            <CartStack.Screen options={{
                title: "Cart"
            }} name="Cart" component={Cart} />
        </CartStack.Navigator>
    )
}



const MainNavigator = (data) => {

    return (
        <MainStack.Navigator
            headerMode="none"
        >
            <MainStack.Screen name="Welcome" component={WelcomeStackNavigator} />
            <MainStack.Screen name="Home" component={HomeStackNavigator} />
            <MainStack.Screen name="Shoes" component={ShoesStackNavigator} />
            <MainStack.Screen name="Cart" component={CartStackNavigator} />
        </MainStack.Navigator>
    )
}

export default MainNavigator;