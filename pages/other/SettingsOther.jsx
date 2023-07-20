import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    TextInput,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Modal
} from "react-native";
import React, {
    useEffect,
    useState
} from "react";
import Colors from "../../colors"
import pops from '../../assets/gen/popsW.png'
import userPic from '../../assets/others/person.jpg'
import arrow from '../../assets/gen/Arrow3(1).png'
import ImageCam from '../../assets/gen/cam.png'

export default function SettingsOther() {
    const [name, setName] = useState('Mary Morgan')
    return (
        <View style={styles.container}>
            <View style={styles.cover}>
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true)
                    }}
                    style={styles.popsStyle} >
                    <Image source={arrow} style={styles.arrow} />
                </TouchableOpacity>
            </View>
            <View style={styles.home}>
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
                <View style={styles.emailView}>
                    <Text style={styles.inpText}>Phone number</Text>
                    <View style={styles.inpView}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(val) => setEmail(val)}
                        />
                    </View>
                </View>
                <View style={styles.firstLastCont1} >
                    <View style={styles.firstView}>
                        <Text style={styles.inpText}>Firest Name</Text>
                        <TextInput style={styles.textCont2} />
                    </View>
                    <View style={styles.lasttView}>
                        <Text style={styles.inpText}>Last Name</Text>
                        <TextInput style={styles.textCont2} />
                    </View>
                </View>
                <TouchableOpacity style={styles.signBu}>
                    <View style={styles.loginButTxtView}>
                        <Text style={styles.loginButTxt}>Confirm</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.prof}>
                <View style={styles.circleWhite}>
                    <TouchableOpacity>
                        <Image source={userPic} style={styles.circlePic} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    loginButTxt: {
        fontSize: 15,
        fontFamily: Colors.fontFamily,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 5
    },
    loginButTxtView: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15
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
    emailView: {
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
    inpText: {
        fontFamily: Colors.fontFamily,
        fontSize: 13,
        opacity: 0.5,
        marginLeft: 5,
        marginBottom: 2
    },
    lasttView: {
        marginLeft: 13,
    },
    firstView: {
        marginRight: 13,
    },
    firstLastCont: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 100
    },
    firstLastCont1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        // marginTop: 100
    },
    ImageCamStyle: {
        width: 44,
        height: 44,
        marginHorizontal: 35,
        marginBottom: 50,
    },
    arrow: {
        width: 8,
        height: 15,
        marginTop: 30,
        alignSelf: 'flex-start',
        marginLeft: 10,
        position: 'absolute'
    },
    name: {
        fontSize: 18,
        fontFamily: Colors.fontFamily,
        color: Colors.font,
        fontWeight: 'bold',
    },
    prof: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 30,
        marginTop: 100,
    },
    imageEdit: {
        width: 120,
        height: 120,
        backgroundColor: Colors.logo,

    },
    circleWhite: {
        width: 120,
        height: 120,
        backgroundColor: Colors.base,
        marginBottom: 5,
        borderRadius: 100,
    },
    circlePic: {
        width: 112,
        height: 112,
        marginBottom: 10,
        borderRadius: 100,
        margin: 4,
        opacity: 0.5
    },
    cover: {
        width: '100%',
        height: '40%',
        backgroundColor: Colors.cover,
        position: 'absolute'
    },
    home: {
        width: '100%',
        height: '100%',
        marginTop: 150,
        backgroundColor: Colors.base,
        borderTopRightRadius: 70,
        position: 'absolute',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
});