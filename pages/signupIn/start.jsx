import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import Logo from "../../assets/gen/Logo.png";
import { NetworkStatus } from "./NetworkStatus";

export default function start({ navigation }) {
  const opacity = new Animated.Value(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => navigation.navigate("OnboardingFlow"));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <NetworkStatus>
      <Animated.View
        style={{
          flex: 1,
          opacity,
        }}
      >
        <View style={styles.body}>
          <Image source={Logo} style={styles.Logo} />
        </View>
        <StatusBar style="auto" />
      </Animated.View>
    </NetworkStatus>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  Logo: {
    width: 208,
    height: 69,
  },
});
