import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    TextInput,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView
} from "react-native";
import React, {
    useEffect,
    useState
} from "react";
import Logo from '../../assets/gen/Logo.png'
import Colors from "../../colors"
import Arrow from '../../assets/gen/Arrow3.png'
export default function ForgetPass1({navigation}) {
    const handelSendCode =()=>{
        navigation.navigate("F2")
    }
    const handelArrow =()=>{
        navigation.navigate("Login")
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.arrow}
                onPress={handelArrow}
            >
                <Image
                    source={Arrow}
                    style={styles.arrow}
                />
            </TouchableOpacity>
            <View style={styles.forgetcontainer}>
                <Image
                    source={Logo}
                    style={styles.Logo}
                />
                <Text style={styles.forgetTxt}> Forget Password !</Text>

                <View style={styles.emailView}>
                    <Text style={styles.inpText}>Email</Text>
                    <View style={styles.inpView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(val) => setEmail(val)}
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.signBu} onPress={handelSendCode}>
                        <View style={styles.loginButTxtView}>
                            <Text style={styles.loginButTxt}>Send Code</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    forgetcontainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:150
    },
    arrow: {
        width: 10,
        height: 12,
        marginTop: 20,
        marginLeft:10,
        alignSelf: 'flex-start'
    },
    container: {
        flex: 1,
        backgroundColor: Colors.base,
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    Logo: {
        width: 208,
        height: 69,
        justifyContent: 'center',

    },
    forgetTxt: {
        fontFamily: Colors.fontFamily,
        color: Colors.logo,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 3,
        marginTop: 10
    },
    emailView: {
        marginTop: 50,
        marginBottom: 15,
    },
    inpText: {
        fontFamily: Colors.fontFamily,
        fontSize: 13,
        opacity: 0.5,
        marginLeft: 5,
        marginBottom: 2
    },
    input: {
        width: 328,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#fff",
        elevation: 2,
        paddingHorizontal: 10,
    },
    inpView: {
        width: 328,
        height: 50,
    },
    signBu: {
        width: 328,
        height: 59,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: '#708696',
        marginTop: 15,
    },
    loginButTxtView: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15
    },
    loginButTxt: {
        fontSize: 15,
        fontFamily: Colors.fontFamily,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 3
    },
});
