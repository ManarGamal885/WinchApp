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
import ChatCard from "../../components/chatCard"
import arrow from '../../assets/gen/Arrow3(1).png'

export default function MessagesList() {
    return (
        <View style={styles.cont}>
            <View style={styles.headerCont}>

                <View style={styles.arrowCont}>
                    <TouchableOpacity >
                        <Image source={arrow} style={styles.arrow} />
                    </TouchableOpacity>
                </View>

                <View style={styles.chatHeaderCont}>
                    <Text style={styles.chatHeader}>Chat</Text>
                </View>
                
            </View>
            <ChatCard />
        </View>
    )
}
const styles = StyleSheet.create({
    cont: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.base
    },
    headerCont: {
        width: '100%',
        height: '9%',
        backgroundColor: Colors.base,
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
        flexDirection: 'row',
        alignSelf:'flex-end',
        marginBottom:15
    },
    chatHeaderCont: {
        width: '82%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center'
    },
    arrowCont: {
        width: '9%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    chatHeader: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: Colors.fontFamily,
        color: Colors.buttons,
        elevation:2,
    },
    arrow: {
        width: 8,
        height: 15,
        alignSelf: 'flex-start',
        marginTop: 5,
    },
})