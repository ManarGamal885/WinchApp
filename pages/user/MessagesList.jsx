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
export default function MessagesList() {
  return (
    <View  style={styles.cont}>
        <ChatCard />
    </View>
  )
}
const styles = StyleSheet.create({
    cont:{
        width:'100%',
        height:'100%',
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    

})