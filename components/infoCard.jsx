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
import Colors from "../colors"
import Img from '../assets/others/mechPerson.jpg'
import Chat from '../assets/gen/Group.png'
import StarOn from '../assets/gen/starOn.png'
import StarOff from '../assets/gen/starOff.png'
import arrow from '../assets/gen/Arrow3(1).png'
export default function infoCard() {
    const [img, setImg] = useState('');
    const [city, setCity] = useState('Naser City');
    const [phone, setPhone] = useState('+20123456789');
    const [rate, setRate] = useState(2);
    const [star, setstar] = useState(false);
    const [name, setName] = useState('Mike Adams');
    const [cost, setCost] = useState('30 $');
    const [workShop, setworkShop] = useState('Mike’s Workshop');
    const [carNum, setcarNum] = useState();
    const [modalVisible, setModalVisible] = useState(false);
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
        <View style={styles.cont}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modal}>
                    <View style={styles.imagesNimag}>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(false)
                            }}
                        >
                            <Image source={arrow} style={styles.arrow} />
                        </TouchableOpacity>

                        <Image source={Img} style={styles.imgInfo} />

                    </View>
                    <Text style={styles.name1}>{name}</Text>
                    <Text style={styles.cost}>Average coast: {cost}</Text>
                    <Text style={styles.city2}>{city}</Text>
                    <Text style={styles.number2}>{phone}</Text>
                    <View style={styles.starContainer2}>
                        {starsRate}
                    </View>
                    {/* handel if clicked user is winch show {carNum} */}
                    <Text style={styles.workShopStyle}>{workShop}</Text>
                    <TouchableOpacity>
                        <Image source={Chat} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signBu}>
                            <View style={styles.loginButTxtView}>
                                <Text style={styles.loginButTxt}>Write Review</Text>
                            </View>
                        </TouchableOpacity>
                </View>
            </Modal>

            <View style={styles.container}>
                <TouchableOpacity style={styles.cardContainer}
                    onPress={() => {
                        setModalVisible(true)
                    }}>
                    <View style={styles.containerStuf}>
                        <View style={styles.imgCont}>
                            <Image style={styles.imageSt} source={Img} />
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={styles.starContainer}>
                                {starsRate}
                            </View>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.city}>{city}</Text>
                            <Text style={styles.number}>{phone}</Text>
                        </View>
                        <View style={styles.chatCont}>
                            <TouchableOpacity>
                                <Image source={Chat} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </TouchableOpacity>

            </View>
        </View>



    )
}
const styles = StyleSheet.create({

    loginButTxt: {
        fontSize: 11,
        fontFamily: Colors.fontFamily,
        fontWeight: "bold",
        color: "#fff",
        marginTop:5
    },
    loginButTxtView: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5
    },
    signBu: {
        width: 177,
        height: 38,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: '#708696',
        marginTop: 15,
    },
    imagesNimag: {
        flexDirection: 'row',
        width: '100%',
        height: 146,
    },
    arrow: {
        width: 8,
        height: 15,
        alignSelf: 'flex-end',
        marginTop: 20,
        marginLeft: 20,
    },
    imgInfo: {
        width: 148,
        height: 146,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: '24%'
    },
    modal: {
        height: '60%',
        width: '100%',
        backgroundColor: Colors.base,
        borderTopLeftRadius: 10,
        alignItems: 'flex-start',
        backgroundColor: "#fff",
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        elevation: 2,
        alignItems: 'center',
        flexDirection: 'column'
    },
    cont: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    cardContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        position: 'absolute',
        marginVertical: 30,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: 'center',
    },
    star: {
        width: 21,
        height: 18
    },
    number: {
        fontSize: 11,
        fontFamily: Colors.fontFamily,
        color: Colors.font
    },
    number2: {
        fontSize: 11,
        fontFamily: Colors.fontFamily,
        color: Colors.font,
        marginBottom:6
    },
    city: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: Colors.fontFamily,
        color: Colors.font
    },
    city2: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: Colors.fontFamily,
        color: Colors.font,
        marginBottom:6
    },
    name1: {
        fontSize: 11,
        fontWeight: 'bold',
        fontFamily: Colors.fontFamily,
        color: Colors.font,
        marginTop: 10,
        marginBottom:6
    },
    name: {
        fontSize: 11,
        fontWeight: 'bold',
        fontFamily: Colors.fontFamily,
        color: Colors.font
    },
    cost: {
        fontSize: 11,
        fontFamily: Colors.fontFamily,
        color: Colors.font,
        marginBottom:6
    },
    workShopStyle:{
        fontSize: 11,
        fontWeight: 'bold',
        fontFamily: Colors.fontFamily,
        color: Colors.font,
        marginBottom:6
    },
    starContainer2: {
        width: '30%',
        height: '6%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:6
    },
    starContainer: {
        width: '80%',
        height: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerStuf: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        position: 'absolute',
        marginVertical: 30,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: 'center',
    },
    chatCont: {
        width: '30%',
        height: '100%',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        alignItems: 'flex-end',
        marginRight: 30,
        justifyContent: 'center'
    },
    infoContainer: {
        width: '40%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgCont: {
        width: '25%',
        height: '100%',
    },
    imageSt: {
        width: '100%',
        height: '100%',

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '92%',
        height: '12%',
        flexDirection: 'row',
        position: 'absolute',
        marginVertical: 30,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 2,
        alignItems: 'center',
    },
})