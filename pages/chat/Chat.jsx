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
import arrow from '../../assets/gen/Arrow3(1).png'
import pop from '../../assets/gen/poDark.png'
import ms from '../../assets/gen/messagesend.png'
import photoSent from '../../assets/gen/imageSend.png'
import mechP from '../../assets/others/mechPerson.jpg'
export default function Chat({ navigation }) {
    const [name, setName] = useState('Mike Adams');
    const [profImage, setprofImage] = useState('');
    const [messageList, setmessageList] = useState([]);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.arrowCont}>
                    <TouchableOpacity style={styles.arrow} onPress={navigation.navigate("HomeOther")}>
                        <Image source={arrow} style={styles.arrow} />
                    </TouchableOpacity>
                </View>
                <View style={styles.nameProfCont}>
                    <View style={styles.imagePersonCont}>
                        <Image source={mechP} style={styles.imagePerson} />
                    </View>

                    <Text style={styles.name}>{name}</Text>
                </View>
                <View style={styles.pointsCont}>
                    <TouchableOpacity style={styles.pointTouch}>
                        <Image source={pop} style={styles.pops} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.messageCont}>
                <View style={styles.sendMessage}>
                    <Text style={styles.fsendMessage}>Where are you?</Text>
                </View>
                <View style={styles.recivedMessage}>
                    <Text style={styles.frecivedMessage}>is this your car?</Text>
                </View>
            </View>
            <View style={styles.sendingBox}>
                <View style={styles.sendImage}>
                    <TouchableOpacity style={styles.sendImageStyle}>
                        <Image source={photoSent} style={styles.sendImageStyle} />
                    </TouchableOpacity>

                </View>
                <View style={styles.sendBox}>
                    <TextInput style={styles.inputMessage} placeholder="Type a message ..."></TextInput>
                </View>
                <View style={styles.sendIcon}>
                    <TouchableOpacity style={styles.sendImageStyle}>
                        <Image source={ms} style={styles.sendImageStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9'
    },
    messageCont: {
        width: '100%',
        height: '82%',
        flexDirection: 'column'
    },
    sendingBox: {
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#D9D9D9',
    },
    arrowCont: {
        width: '9%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    nameProfCont: {
        width: '82%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    pointsCont: {
        width: '9%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagePersonCont: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 5,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
    },
    sendImage: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sendBox: {
        width: '80%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sendIcon: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sendMessage: {
        maxWidth: "80%",
        padding: 10,
        height: 42,
        backgroundColor: Colors.cover2,
        alignSelf: "flex-end",
        marginTop: 10,
        marginRight: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    recivedMessage: {
        maxWidth: "80%",
        padding: 10,
        height: 42,
        backgroundColor: '#F5F5F5',
        alignSelf: "flex-start",
        marginTop: 10,
        marginLeft: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    arrow: {
        width: 8,
        height: 15,
        alignSelf: 'center',
    },
    imagePerson: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    name: {
        fontFamily: Colors.fontFamily,
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.font,
        marginLeft: 10
    },
    pops: {
        width: 12,
        height: 15,
    },
    pointTouch: {
        width: 12,
        height: 15,
    },
    sendImageStyle: {
        width: 29,
        height: 26,
    },
    inputMessage: {
        width: '100%',
        height: 31,
        backgroundColor: '#F4F3F3',
        borderRadius: 50,
        paddingHorizontal: 10
    },
    fsendMessage: {
        fontFamily: Colors.fontFamily,
        fontSize: 13,
        color: '#FFFFFF',
    },
    frecivedMessage: {
        fontFamily: Colors.fontFamily,
        fontSize: 13,
        color: '#000',
    },

})