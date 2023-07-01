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
import pops from '../../assets/gen/popsW.png'
import userPic from '../../assets/others/person.jpg'
import winch from '../../assets/others/towtruck.png'
import mech from '../../assets/others/mech.png'

export default function HomeUser() {
    const [name, setName] = useState('Mary Morgan')
    return (
        <View style={styles.container}>
            <View style={styles.cover}>
                <TouchableOpacity
                    style={styles.popsStyle} >
                    <Image source={pops} style={styles.popsStyle} />
                </TouchableOpacity>
            </View>

            <View style={styles.home}>
                <TouchableOpacity
               
                >
                    <Image source={ winch} style={styles.winch} />
                </TouchableOpacity>
                <TouchableOpacity
                    
                >
                    <Image source={ mech}  style={styles.mech}/>
                </TouchableOpacity>
            </View>


            <View style={styles.prof}>
                <View style={styles.circleWhite}>
                    <Image source={userPic} style={styles.circlePic} />
                </View>
                <Text style={styles.name}>{name}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
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
        fontSize: 18,
        fontFamily: Colors.fontFamily,
        color: Colors.font,
        fontWeight: 'bold',
    },
    prof: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
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
        borderTopRightRadius: 70,
        position: 'absolute',
        alignItems: 'center',
          justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
});