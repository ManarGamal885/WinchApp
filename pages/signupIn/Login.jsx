import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    TextInput,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, {
    useEffect,
    useState
} from "react";
import Back1 from "../../assets/backgrounds/Rectangle1.png"
import Colors from "../../colors"
import PassIconV from "../../assets/gen/open.png"
import PassIconInV from "../../assets/gen/close.png"
export default function Login({ navigation }) {
    const [Email, setEmail] = useState("")
    const [Pass, setPass] = useState("")
    const [icon, setIcon] = useState(true);
    const clickEye = () => {
        icon ? setIcon(false) : setIcon(true);
    };
    let imageSource = icon ? PassIconInV : PassIconV;
    return (
        <View style={styles.container}>
            {/* <ScrollView> */}


            <View style={styles.backImage}>
                <Image
                    style={styles.imageStyle}
                    source={Back1}
                />
            </View>
            <ScrollView>


                <View style={styles.backLogin}>
                    <Text style={styles.login}>Login</Text>
                    <View style={styles.emailView}>
                        <Text style={styles.inpText}>Email</Text>
                        <View style={styles.inpView}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(val) => setEmail(val)}
                            />
                        </View>
                    </View>
                    <View style={styles.passView}>
                        <Text style={styles.inpText}>Password</Text>
                        {
                            icon ?
                                (
                                    <View style={styles.inpViewPass}>
                                        <TextInput
                                            style={styles.inputPass}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            textContentType="newPassword"
                                            secureTextEntry
                                            onChangeText={(val) => setPass(val)}
                                        />
                                        <TouchableOpacity onPress={clickEye}>
                                            <Image
                                                source={imageSource}
                                                style={{ width: 14, height: 14, marginHorizontal: 5 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                ) :
                                (
                                    <View style={styles.inpViewPass}>
                                        <TextInput
                                            style={styles.inputPass}
                                            onChangeText={(val) => setPass(val)}
                                        />
                                        <TouchableOpacity onPress={clickEye}>
                                            <Image
                                                source={imageSource}
                                                style={{ width: 14, height: 14, marginHorizontal: 5 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )
                        }
                    </View>
                    <View>
                        <TouchableOpacity style={styles.loginBu}>
                            <View style={styles.loginButTxtView}>
                                <Text style={styles.loginButTxt}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity >
                        <View style={styles.forgetTxtView}>
                            <Text style={styles.forgetTxt}>Forget Password ?</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.orTxtView}>
                        <Text style={styles.orTxt}>Or</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.signBu}>
                            <View style={styles.loginButTxtView}>
                                <Text style={styles.loginButTxt}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
    },
    backImage: {
        width: '100%',
        height: '29%',
        justifyContent: "flex-start",
        alignItems: "center",
        // backgroundColor:"#708696"

    },
    inpViewPass: {
        flexDirection: "row",
        backgroundColor: "#ffff",
        width: 328,
        height: 48,
        elevation: 2,
        borderRadius: 10,
        alignItems: "center",
        overflow: "hidden",
    },
    inputPass: {
        backgroundColor: "#ffff",
        width: 300,
        height: 44,
        paddingHorizontal: 10,
    },
    imageStyle: {
        height: 300,
    },
    backLogin: {
        width: 393,
        height: 614,
        backgroundColor: Colors.base,
        borderTopLeftRadius: 70,
        alignItems: "center",
        flexDirection: 'column'
    },
    login: {
        fontFamily: Colors.fontFamily,
        opacity: 0.6,
        fontSize: 30,
        fontWeight: '100',
        marginTop: 40,
        marginBottom: 5,
    },
    inpText: {
        fontFamily: Colors.fontFamily,
        fontSize: 13,
        opacity: 0.5,
        marginBottom: 5,

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
    passView: {

    },
    emailView: {
        marginBottom: 25,
    },
    loginBu: {
        width: 328,
        height: 59,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: '#708696',
        marginTop: 25,
    },
    signBu: {
        width: 328,
        height: 59,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: '#708696',
        marginTop: 20,
    },
    loginButTxt: {
        fontSize: 15,
        fontFamily: Colors.fontFamily,
        fontWeight: "bold",
        color: "#fff",

    },
    loginButTxtView: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15
    },
    forgetTxt: {
        fontFamily: Colors.fontFamily,
        fontSize: 12,
        opacity: 0.5,
        textDecorationLine: "underline",
    },
    forgetTxtView: {
        marginTop: 4,
        marginLeft: 218,
        borderRadius: 4,
        width: 100,
        height: 30,
    },
    orTxt: {
        fontFamily: Colors.fontFamily,
        fontSize: 15,
        opacity: 0.5,
    },
    orTxtView: {
        alignItems: "center",
        justifyContent: "center",
    },
})