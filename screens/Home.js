import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';


const screenWidth = Math.floor(Dimensions.get('window').width);
const screenHeight = Math.floor(Dimensions.get('window').height);

const Home = ({ navigation: { navigate } }) => {
    return (
        <ScrollView height={screenHeight} width={screenWidth}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../assets/shoes.jpg")} />
                        </View>
                        <TouchableOpacity onPress={() => navigate("Shoes")}>
                            <View style={styles.headingContainer}>
                                <Text style={styles.heading}>Shop Shoes</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../assets/jeans.jpg")} />
                        </View>
                        <TouchableOpacity>
                            <View style={styles.headingContainer}>
                                <Text style={styles.heading}>Shop Jeans</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../assets/shirt.jpg")} />
                        </View>
                        <TouchableOpacity>
                            <View style={styles.headingContainer}>
                                <Text style={styles.heading}>Shop Shirts</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../assets/jacket.jpg")} />
                        </View>
                        <TouchableOpacity>
                            <View style={styles.headingContainer}>
                                <Text style={styles.heading}>Shop Jackets</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../assets/hats.jpg")} />
                        </View>
                        <TouchableOpacity>
                            <View style={styles.headingContainer}>
                                <Text style={styles.heading}>Shop Hats</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require("../assets/watches.jpg")} />
                        </View>
                        <TouchableOpacity>
                            <View style={styles.headingContainer}>
                                <Text style={styles.heading}>Shop Watches</Text>
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
        marginTop: 20
    },
    heading: {
        fontSize: 18,
        color: "#fff"
    }
})

export default Home;