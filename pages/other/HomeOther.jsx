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
import userPic from '../../assets/others/m.png'
import winch from '../../assets/others/towtruck.png'
import mech from '../../assets/others/mech.png'
import arrow from '../../assets/gen/Arrow3(1).png'
import chatImg from '../../assets/gen/cahtIm.png'
import StarOn from '../../assets/gen/starOn.png'
import StarOff from '../../assets/gen/starOff.png'
import ReviewCard from '../../components/reviewCard'
export default function HomeUser() {
    const [name, setName] = useState('Mohamed Ali')
    const [modalVisible, setModalVisible] = useState(false);
    const [rate, setRate] = useState(2);
    let restRateOff = 5 - rate;
    let restRateOn = rate;
    let starsRate = []
    while (restRateOn--) {
        starsRate.push(
            <Image style={styles.star} source={StarOn} />
        )
    }
    while (restRateOff--) {
        starsRate.push(
            <Image style={styles.star} source={StarOff} />
        )
    }
    return (
        <View style={styles.container}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.settingsContView}>
                    <View style={styles.settingsCont}>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(false)
                            }}
                        >
                            <Image source={arrow} style={styles.arrow} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.txtSettings}>Settings</Text>
                        </TouchableOpacity>
                        <Text style={styles.line}>─────────────</Text>
                        <TouchableOpacity>
                            <Text style={styles.txtSettingsLog}>Logout</Text>
                        </TouchableOpacity>
                        <Text style={styles.line}>─────────────</Text>
                        <TouchableOpacity>
                            <Image source={chatImg} style={styles.chatIm} />
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>


            <View style={styles.cover}>
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true)
                    }}
                    style={styles.popsStyle} >
                    <Image source={pops} style={styles.popsStyle} />
                </TouchableOpacity>
            </View>

            <View style={styles.home}>
                <View style={styles.reviewCont}>
                    <Text style={styles.reviewTxt}>Reviews</Text>
                </View>
                <ReviewCard />
            </View>
            <View style={styles.prof}>
                <View style={styles.circleWhite}>
                    <Image source={userPic} style={styles.circlePic} />
                </View>
                <View style={styles.nameCont}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.starContainer}>{starsRate}</View>
                </View>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    reviewTxt: {
        fontSize: 20,
        fontFamily: Colors.fontFamily,
        color: Colors.buttons,
        marginTop: 5,
        marginBottom: 5,
    },
    reviewCont: {
        width: '90%',
        height: '6%',
        marginTop: '20%',
        borderBottomWidth: 1,
        borderColor: '#D9D9D9',
    },
    nameCont: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: 2,
        marginTop: 30
    },
    starContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    chatIm: {
        width: 50,
        height: 50,
        marginHorizontal: 80,
        marginTop: 10,
        marginBottom: 10
    },
    line: {
        color: Colors.cover,
        marginHorizontal: 40,
        marginTop: 5
    },
    txtSettingsLog: {
        fontSize: 40,
        fontFamily: Colors.fontFamily,
        fontWeight: 'bold',
        color: Colors.buttons,
        marginHorizontal: 43,
        marginTop: 10,
        marginBottom: 10

    },
    txtSettings: {
        fontSize: 40,
        fontFamily: Colors.fontFamily,
        fontWeight: 'bold',
        color: Colors.buttons,
        marginHorizontal: 28,
        marginTop: 10,
        marginBottom: 10
    },
    arrow: {
        width: 8,
        height: 15,
        marginTop: 20,
        marginLeft: 10,
    },
    settingsContView: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    settingsCont: {
        height: '100%',
        width: 214,
        backgroundColor: Colors.base,
        borderTopLeftRadius: 10,
        alignItems: 'flex-start'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    winch: {
        width: 369,
        height: 229,
        backgroundColor: '#708696',
        borderRadius: 20,
        // marginTop: 10,
        marginHorizontal: 11
    },
    mech: {
        width: 369,
        height: 229,
        backgroundColor: '#708696',
        borderRadius: 20,
        marginTop: 30,
        marginHorizontal: 11
    },
    name: {
        fontSize: 15,
        fontFamily: Colors.fontFamily,
        color: Colors.font,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    prof: {
        width: '80%',
        marginLeft: 40,
        marginTop: 50,
        flexDirection: 'row',
        // backgroundColor: Colors.cover2,
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
        margin: 4
    },
    popsStyle: {
        width: 20,
        height: 20,
        marginTop: 15,
        alignSelf: 'flex-end',
        marginRight: 10,
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
        marginTop: 95,
        backgroundColor: Colors.base,
        position: 'absolute',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
});