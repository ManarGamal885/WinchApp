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
export default function chatCard() {
    const [img, setImg] = useState("");
    const [name, setname] = useState("Fatima Ahmed");
    const [timeLastmsg, settimeLastmsg] = useState();
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.cont}>
                    <Image source={p} style={styles.person}/>
                    <Text style={styles.nameStyle}>{name}</Text>
                    <Text style={styles.timeStyle}>2:00 AM</Text>
                </View>
            </TouchableOpacity>
           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: '13%',
        overflow: 'hidden',
        paddingBottom: 10,
        paddingLeft: 0.5,
        paddingRight: 0.5,
        paddingTop: 0.09,
        alignSelf: 'center',
        marginTop: 20
    },
    cont: {
        width: '100%',
        height: '100%',
        backgroundColor: "#fff",
        alignSelf: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
        flexDirection:'row'
    },
    person:{
        width:76.59,
        height:73.32,
        borderRadius:50,
        marginLeft:30,
        alignSelf:'center',
    },
    nameStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: Colors.fontFamily,
        color: Colors.font,
        alignSelf:'center',
        marginHorizontal:'10%'
    },
    timeStyle:{
        fontSize: 13,
        fontFamily: Colors.fontFamily,
        color: '#000',
        alignSelf:'center',
        opacity:0.5
    }

})