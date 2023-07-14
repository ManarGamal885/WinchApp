
// star click does not work
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
    Modal,
    ModalComponent
} from "react-native";
import React, {
    useEffect,
    useState
} from "react";
import Colors from "../../colors"
import Img from '../../assets/others/mechPerson.jpg'
import Chat from '../../assets/gen/Group.png'
import StarOn from '../../assets/gen/starOn.png'
import StarOff from '../../assets/gen/starOff.png'
import arrow from '../../assets/gen/Arrow3(1).png'
export default function Review() {
    const [name, setName] = useState('Mike Adams');
    const [star1, setstar1] = useState(false);
    const [star2, setstar2] = useState(false);
    const [star3, setstar3] = useState(false);
    const [star4, setstar4] = useState(false);
    const [star5, setstar5] = useState(false);
    const [rate, setRate] = useState(0);
    const [userIdrate, setuserIdrate] = useState('');
    let starCounter = 0;
    let imageStar1 = star1 ? StarOn : StarOff
    let imageStar2 = star2 ? StarOn : StarOff
    let imageStar3 = star3 ? StarOn : StarOff
    let imageStar4 = star4 ? StarOn : StarOff
    let imageStar5 = star5 ? StarOn : StarOff
    const clickStar1 = () => {
        if (star1) {
            starCounter++;
            setRate(starCounter);
            setstar1(false)
        }
        else {
            starCounter--;
            setRate(starCounter);
            setstar1(true)
        }
    }
    const clickStar2 = () => {
        if (star2) {
            starCounter--;
            setRate(starCounter);
            setstar2(false)
        }
        else {
            starCounter++;
            setRate(starCounter);

            setstar2(true)
        }
    }
    const clickStar3 = () => {
        if (star3) {
            starCounter--;
            setRate(starCounter);
            setstar3(false)
        }
        else {
            starCounter++;
            setRate(starCounter);

            setstar3(true)
        }
    }
    const clickStar4 = () => {
        if (star4) {
            starCounter--;
            setRate(starCounter);
            setstar4(false)
        }
        else {
            starCounter++;
            setRate(starCounter);
            setstar4(true)
        }
    }
    const clickStar5 = () => {
        if (star5) {
            starCounter--;
            setRate(starCounter);
            setstar5(false)
        }
        else {
            starCounter++;
            setRate(starCounter);
            setstar5(true)
        }
    }

    return (
        <View style={styles.cont}>
            <View style={styles.animation0}>
                <View style={styles.animation2}>
                </View>
                <View style={styles.animation1}>
                </View>
            </View>
            <View style={styles.cont1}>
                <TouchableOpacity>
                    <Image source={arrow} style={styles.arrow} />
                </TouchableOpacity>
                <View style={styles.imgInfocont}>
                    <Image source={Img} style={styles.imgInfo} />
                </View>

            </View>

            <View style={styles.cont2}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.starContainer}>
                    <TouchableOpacity
                        onPress={clickStar1}
                    >
                        <Image source={imageStar1} />
                        {console.log(rate)}
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={clickStar2}
                    >
                        <Image source={imageStar2} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={clickStar3}
                    >
                        <Image source={imageStar3} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={clickStar4}
                    >
                        <Image source={imageStar4} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={clickStar5}
                    >
                        <Image source={imageStar5} />
                    </TouchableOpacity>

                </View>
                <Text style={styles.review}>Review</Text>
                <TextInput
                    style={styles.inputView} 
                    multiline
                    scrollEnabled
                    textAlignVertical="top"
                    />
                <TouchableOpacity style={styles.signBu}>
                    <View style={styles.loginButTxtView}>
                        <Text style={styles.loginButTxt}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: Colors.base,
        width: '100%',
        height: '100%',
        flexDirection: 'row-reverse',
        backgroundColor: Colors.base
    },
    cont1: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
    },
    cont2: {
        width: '100%',
        height: '80%',
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'column',
        alignSelf: 'flex-end',
        flex: 1,
        backgroundColor: Colors.base
    },
    starContainer: {
        width: '40%',
        height: '6%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    animation0: {
        flex: 1,
        width: '40%',
        height: '30%',
        flexDirection: 'column-reverse',
        alignSelf: 'flex-end',
        position: 'absolute'
    },
    animation2: {
        width: 140,
        height: 130,
        backgroundColor: Colors.cover,
        position: 'absolute',
        alignSelf: 'flex-end',
        borderTopLeftRadius: 80,
    },
    animation1: {
        width: 90,
        height: 170,
        marginBottom: 35,
        backgroundColor: Colors.cover2,
        position: 'absolute',
        alignSelf: 'flex-end',
        opacity: 0.6,
        borderTopLeftRadius: 70,
        borderBottomLeftRadius: 70,
    },
    imgInfocont: {
        width: 148,
        height: 146,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: '24.2%',
        elevation: 4
    },
    imgInfo: {
        width: '100%',
        height: '100%',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    arrow: {
        width: 8,
        height: 15,
        alignSelf: 'flex-end',
        marginTop: 20,
        marginLeft: 20,
    },
    name: {
        fontSize: 11,
        fontWeight: 'bold',
        fontFamily: Colors.fontFamily,
        color: Colors.font,
        marginTop: 5
    },
    review: {
        fontSize: 14,
        fontFamily: Colors.fontFamily,
        marginTop: 60,
        marginBottom: 10,
        opacity: 0.6,
        marginRight: '75%',
    },
    star: {
        width: 21,
        height: 18
    },
    inputView: {
        width: '90%',
        height: '30%',
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 2,
        paddingHorizontal: 10,
        paddingVertical: 10,
   
    },
    signBu: {
        width: 328,
        height: 59,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: '#708696',
        marginTop: 30,
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
        marginTop: 5
    },
})