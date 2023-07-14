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
export default function chatCard() {
    return (
        <View style={styles.cont}>
            <Text>hi</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    cont:{
        width:'90%',
        height:'10%',
        backgroundColor:Colors.buttons,
        marginTop:20
    },
    
})