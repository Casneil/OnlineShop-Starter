import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import shoes from "../util/_storeData.js"


const screenWidth = Math.floor(Dimensions.get('window').width);
const screenHeight = Math.floor(Dimensions.get('window').height);

const Shoes = ({ navigation: { navigate } }) => {
    return (
        <ScrollView height={screenHeight} width={screenWidth}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../assets/shoes/puma-circle.jpg")} />
                        </View>
                        <TouchableOpacity onPress={() => navigate("Cart")}>
                            <View style={styles.headingContainer}>
                                <Text style={styles.heading}>{shoes["puma-circle"].name}</Text>
                                <Text style={styles.heading}>Size: {shoes["puma-circle"].size}</Text>
                                <Text style={styles.heading}>Price: {shoes["puma-circle"].price}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../assets/shoes/air-force.jpg")} />
                        </View>
                        <TouchableOpacity onPress={() => navigate("Cart")}>
                            <View style={styles.headingContainer}>
                                <Text style={styles.heading}>{shoes["air-force"].name}</Text>
                                <Text style={styles.heading}>Size: {shoes["air-force"].size}</Text>
                                <Text style={styles.heading}>Price: {shoes["air-force"].price}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../assets/shoes/air-max.jpg")} />
                        </View>
                        <TouchableOpacity onPress={() => navigate("Cart")}>
                            <View style={styles.headingContainer}>
                                <Text style={styles.heading}>{shoes["air-force"].name}</Text>
                                <Text style={styles.heading}>Size: {shoes["air-force"].size}</Text>
                                <Text style={styles.heading}>Price: {shoes["air-force"].price}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../assets/shoes/ultra-boost.jpg")} />
                        </View>
                        <TouchableOpacity onPress={() => navigate("Cart")}>
                            <View style={styles.headingContainer}>
                                <Text style={styles.heading}>{shoes["ultra-boost"].name}</Text>
                                <Text style={styles.heading}>Size: {shoes["ultra-boost"].size}</Text>
                                <Text style={styles.heading}>Price: {shoes["ultra-boost"].price}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../assets/shoes/converse.jpg")} />
                        </View>
                        <TouchableOpacity onPress={() => navigate("Cart")}>
                            <View style={styles.headingContainer}>
                                <Text style={styles.heading}>{shoes["chuck-taylor"].name}</Text>
                                <Text style={styles.heading}>Size: {shoes["chuck-taylor"].size}</Text>
                                <Text style={styles.heading}>Price: {shoes["chuck-taylor"].price}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../assets/shoes/martens.jpg")} />
                        </View>
                        <TouchableOpacity onPress={() => navigate("Cart")}>
                            <View style={styles.headingContainer}>
                                <Text style={styles.heading}>{shoes.martens.name}</Text>
                                <Text style={styles.heading}>Size: {shoes.martens.size}</Text>
                                <Text style={styles.heading}>Price: {shoes.martens.price}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
        backgroundColor: "rgba(0,0,0, .5)",
    },
    box: {
        width: screenWidth / 2,
        height: screenHeight / 2,
        padding: 1
    },
    card: {
        flex: 1,
        backgroundColor: "rgba(226,127,31, .8)"
    },
    imageContainer: {
        width: "100%",
        height: "75%",
        resizeMode: "cover",
        marginBottom: StyleSheet.hairlineWidth,
        backgroundColor: "cyan"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        marginBottom: StyleSheet.hairlineWidth,
        backgroundColor: "cyan"
    },
    headingContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    heading: {
        fontSize: 18,
        color: "#fff"
    }
})

export default Shoes;