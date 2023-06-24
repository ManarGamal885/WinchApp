import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import NetInfo from "@react-native-community/netinfo";
export const NetworkStatus = ({ children }) => {
    const [isConnected, setIsConnected] = useState(true);
  
    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener((state) => {
        setIsConnected(state.isConnected);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    return (
      <View style={styles.wrapper}>
        {isConnected ? children : null}
      </View>
    );
  };
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 200,
      height: 200,
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 20,
    },
  });