import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const Welcome = ({ navigation: { navigate } }) => {


    return (
        <View style={styles.container}>
            <Text style={{ backgroundColor: "#000", position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 3, opacity: .5 }}></Text>
            <View style={styles.photoContainer}>
                <Image source={require("../assets/loginPhoto.jpg")} />
            </View>
            <View style={styles.login}>
                <TouchableOpacity onPress={() => navigate("Home")}>
                    <Text style={{
                        color: "#000", fontSize: 24, paddingHorizontal: 100,
                        paddingVertical: 8, zIndex: 4
                    }}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.credntials}>
                <TextInput style={styles.input} placeholder="Username" keyboardType="email-address" />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
    },
    photoContainer: {
        resizeMode: "cover",
    },
    login: {
        backgroundColor: "#fff",
        flex: 1,
        opacity: .6,
        zIndex: 40,
        position: "absolute",
        borderRadius: 10,
        bottom: 20,
    },
    credntials: {
        position: "absolute",
        bottom: 80,
        zIndex: 4,
        backgroundColor: "#fff",
        borderRadius: 10,
        width: "62%",
        opacity: .6,
    },
    input: {
        marginTop: 1,
        marginLeft: 4,
        marginRight: 4,
        borderRadius: 12,
        flex: 1,
        zIndex: 4,
        fontSize: 20,
    }
});


export default Welcome;