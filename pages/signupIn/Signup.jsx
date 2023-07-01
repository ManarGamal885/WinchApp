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
import Colors from "../../colors"
import Back1 from "../../assets/backgrounds/Rectangle1.png"
import PassIconV from "../../assets/gen/open.png"
import PassIconInV from "../../assets/gen/close.png"
import On from '../../assets/gen/on.png'
import Off from '../../assets/gen/off.png'
export default function Signup({ navigation }) {
    const [Email, setEmail] = useState("")
    const [Pass, setPass] = useState("")
    const [PassConfirm, setPassConfirm] = useState("")
    const [userJop, setuserJop] = useState("")
    const [radio, setRadio] = useState(false)
    const [radio1, setRadio1] = useState(false)
    const [icon, setIcon] = useState(true);
    const [icon1, setIcon1] = useState(true);
    const clickEye = () => {
        icon ? setIcon(false) : setIcon(true);
    };
    const clickEye1 = () => {
        icon1 ? setIcon1(false) : setIcon1(true);
    };
    const clickRadioUser = () => {
        if (radio) {
            setRadio(false)

            setuserJop("")
        }
        else {
            setRadio(true)
            setuserJop('user')
        }

    }
    const clickRadiodm = () => {
        if (radio1) {
            setRadio1(false)

            setuserJop("")
        }
        else {
            setRadio1(true)
            setuserJop('dm')
        }
    }
    let imageRadio = radio ? On : Off
    let imageRadio1 = radio1 ? On : Off
    let imageSource = icon ? PassIconInV : PassIconV;
    let imageSource1 = icon1 ? PassIconInV : PassIconV;
    return (
        <View style={styles.container}>
            
            <View style={styles.backImage}>
                <Image source={Back1} />
            </View>

            <ScrollView contentContainerStyle={{ alignItems: "center" }}>


                <View style={styles.backLogin}>

                    <Text style={styles.login} >Sign Up</Text>
                    <View style={styles.firstLastCont} >
                        <View style={styles.firstView}>
                            <Text style={styles.inpText}>Firest Name</Text>
                            <TextInput style={styles.textCont2} />
                        </View>
                        <View style={styles.lasttView}>
                            <Text style={styles.inpText}>Last Name</Text>
                            <TextInput style={styles.textCont2} />
                        </View>
                    </View>
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
                    <View style={styles.passView}>
                        <Text style={styles.inpText}>Confirm Password</Text>
                        {
                            icon1 ?
                                (
                                    <View style={styles.inpViewPass}>
                                        <TextInput
                                            style={styles.inputPass}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            textContentType="newPassword"
                                            secureTextEntry
                                            onChangeText={(val) => setPassConfirm(val)}
                                        />
                                        <TouchableOpacity onPress={clickEye1}>
                                            <Image
                                                source={imageSource1}
                                                style={{ width: 14, height: 14, marginHorizontal: 5 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                ) :
                                (
                                    <View style={styles.inpViewPass}>
                                        <TextInput
                                            style={styles.inputPass}
                                            onChangeText={(val) => setPassConfirm(val)}
                                        />
                                        <TouchableOpacity onPress={clickEye1}>
                                            <Image
                                                source={imageSource1}
                                                style={{ width: 14, height: 14, marginHorizontal: 5 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )
                        }
                    </View>

                    <View style={styles.radioButtons}>
                        <View style={styles.radioButton1}>
                            <Text style={styles.inpTextBtn1}>User</Text>
                            <TouchableOpacity
                                onPress={clickRadioUser}
                            >
                                <Image source={imageRadio} style={styles.radioBtn} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.radioButton2}>
                            <Text style={styles.inpTextBtn2} >Driver /mechanical </Text>
                            <TouchableOpacity
                                onPress={clickRadiodm}
                            >
                                <Image source={imageRadio1} style={styles.radioBtn} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.firstLastCont} >
                        <View style={styles.firstView}>
                            <Text style={styles.inpText}>Car number</Text>
                            <TextInput style={styles.textCont2} />
                        </View>
                        <View style={styles.lasttView}>
                            <Text style={styles.inpText}>City</Text>
                            <TextInput style={styles.textCont2} />
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.signBu}>
                            <View style={styles.loginButTxtView}>
                                <Text style={styles.loginButTxt}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.alreadyAcView}>
                        <Text style={styles.alreadyAcTxt}>Already have an account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.alreadyAcTxtSignIN}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>

    )

}
const styles = StyleSheet.create({
    arrow:{
        width:15,
        height:15,
        marginTop:30
    },
    alreadyAcTxt: {
        fontFamily: Colors.fontFamily,
        fontSize: 13,
        opacity: 0.9,
        marginLeft: 5,
    },
    alreadyAcTxtSignIN: {
        fontFamily: Colors.fontFamily,
        fontSize: 13,
        opacity: 0.9,
        marginLeft: 5,
        textDecorationLine: "underline",
        
    },
    alreadyAcView: {
        marginTop: 10,
        flexDirection: 'row'
    },
    loginButTxtView: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15
    },
    inpTextBtn1: {
        fontFamily: Colors.fontFamily,
        fontSize: 13,
        opacity: 0.5,
        marginLeft: 5,
        marginRight: 80,
        marginBottom: 15,
    },
    inpTextBtn2: {
        fontFamily: Colors.fontFamily,
        fontSize: 13,
        opacity: 0.5,
        marginLeft: 20,
        marginRight: 10,
        marginBottom: 15,
    },
    radioButton1: {
        marginLeft: 10,
        flexDirection: 'row'
    },
    radioButton2: {
        marginRight: 10,
        marginLeft: 20,
        flexDirection: 'row'
    },
    radioBtn: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioButtons: {
        flexDirection: 'row'
    },
    input: {
        width: 328,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#fff",
        elevation: 2,
        paddingHorizontal: 10,
    },
    lasttView: {
        marginLeft: 13,
    },
    firstView: {
        marginRight: 13,
    },
    passView: {
        marginBottom: 15,
    },
    textCont2: {
        width: 151,
        height: 50,
        elevation: 2,
        paddingHorizontal: 12,
        borderRadius: 10,
        backgroundColor: "#fff",
        elevation: 2,
    },
    container: {
        flexDirection: "column",
        flex: 1,
    },
    backImage: {
        width: '100%',
        height: '7%',
        justifyContent: "flex-start",
        alignItems: "center",
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
        height: 680,
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
        marginTop: 15,
        marginBottom: 30,
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
    emailView: {
        marginBottom: 15,
    },
    loginBu: {
        width: 328,
        height: 59,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: '#708696',
        marginTop: 15,
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
    loginButTxt: {
        fontSize: 15,
        fontFamily: Colors.fontFamily,
        fontWeight: "bold",
        color: "#fff",
        marginTop:5
    },
    firstLastCont: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    }
})

