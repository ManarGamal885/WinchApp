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
import Colors from "../colors"
import p from '../assets/others/p.jpg'
import StarOn from '../assets/gen/starOn.png'
import StarOff from '../assets/gen/starOff.png'
import chat from '../assets/gen/Group.png'
export default function reviewCard() {
    const [img, setImg] = useState('');
    const [name, setName] = useState('Fatima Ahmed')
    const [feedBack, setfeedBack] = useState('This is the best winch in Haram thanks Mohamed')
    const [givenRate, setgivenRate] = useState(4);
    let restRateOff = 5 - givenRate;
    let restRateOn = givenRate;
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
        <View style={styles.container} >
            <View style={styles.cont2} >
                <View style={styles.starContainer2}>
                    {starsRate}
                </View>
                    <View style={styles.feedBackCont}>
                        <Text style={styles.feedBack}>{feedBack}</Text>
                    </View>
                <View style={styles.touchCont}>
                    <TouchableOpacity style={styles.touchCont} onPress={() => { console.log("clicked") }}>
                        <Image source={chat} style={styles.chatStyle} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cont0}>
                <View style={styles.cont1}>
                    <Image source={p} style={styles.img} />
                </View>
            </View>
            <View style={styles.hideCont}>
                <Text style={styles.name}>{name}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '25%',
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'row-reverse',
        justifyContent: 'center'
    },
    cont2: {
        width: '100%',
        height: '70%',
        backgroundColor: "#fff",
        alignSelf: 'flex-end',
        // position: 'absolute',
        flex: 1,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
    },
    hideCont: {
        height: 13,
        marginTop: 90,
        backgroundColor: '#fff',
        position: 'absolute',
        marginBottom: 2
    },
    cont0: {
        overflow: 'hidden',
        paddingTop: 10,
        width: 92.34,
        height: 89.74,
        backgroundColor: '#fff',
        position: 'absolute',
        flex: 1,
        marginTop: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cont1: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        flex: 1,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,
    },
    feedBackCont: {
        width: 133,
        height: 33,
        marginTop: 2,
    },
    starContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 2,
    },
    touchCont: {
        width: 19,
        height: 20,
        // marginTop: 2,
    },
    img: {
        width: 62,
        height: 60,
        position: 'absolute',
        flex: 1,
        borderRadius: 50,
        alignSelf: 'center',
    },
    name: {
        fontSize: 11,
        fontFamily: Colors.fontFamily,
        fontWeight: 'bold',
        color: Colors.font,
        alignSelf: 'center',
    },
    star: {
        width: 14.41,
        height: 12.43
    },
    chatStyle: {
        width: 19,
        height: 19,
        alignSelf: 'center'
    },
    feedBack: {
        textAlign: 'center',
        fontSize: 11,
        fontFamily: Colors.fontFamily,
        alignSelf: 'center',
        opacity: 0.6
    },
})