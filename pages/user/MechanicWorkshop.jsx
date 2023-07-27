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
import InfoCard from "../../components/infoCard";
import Search from '../../assets/gen/search.png'
import arrow from '../../assets/gen/Arrow3(1).png'
export default function MechanicWorkshop({ navigation }) {
    const [userJop, setuserJop] = useState("user")
    const handelArrow =()=>{
        if (userJop == "user") {
            navigation.navigate("HomeUser")
        }
        else{
            navigation.navigate("HomeOther")
        }
        
    }
    return (
        <View style={styles.container} >
            <View style={styles.animation0}>
                <View style={styles.animation2}>
                </View>
                <View style={styles.animation1}>
                </View>
            </View>
            <View style={styles.searchView}>
                <View style={styles.searchContent}>
                    <TouchableOpacity>
                        <Image
                            source={Search}
                            style={styles.imgSearch}
                        />
                    </TouchableOpacity>
                    <TextInput style={styles.input} placeholder="Enter Your City " />
                </View>
                <Text style={styles.line}>───────────────────────────────</Text>
            </View>
            <View style={styles.arrowView}>
                <TouchableOpacity
                    onPress={handelArrow}>
                    <Image
                        source={arrow} style={styles.arrow}
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.container2}>
                <InfoCard navigation={navigation} />
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    arrow: {
        width: 8,
        height: 15,
        marginTop: 35,
        marginLeft: 10,
    },
    line: {
        color: Colors.buttons,
        opacity: 0.6,
        marginLeft: 10
    },
    imgSearch: {
        width: 40,
        height: 25.08,
        marginTop: 30,
    },
    input: {
        width: '80%',
        marginTop: 30,
        marginLeft: 10
    },
    searchContent: {
        flexDirection: 'row',
    },
    arrowView: {
        width: '10%',
        height: '9%',
    },
    searchView: {
        width: '90%',
        height: '9%',

    },
    container: {
        flex: 1,
        backgroundColor: Colors.base,
        width: '100%',
        height: '100%',
        flexDirection: 'row-reverse',
    },
    container2: {
        width: '100%',
        height: '90%',
        position: 'absolute',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-end'
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
    }

});