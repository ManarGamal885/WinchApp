import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from "../Winch/pages/signupIn/start"
import Login from "../Winch/pages/signupIn/Login"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Start /> */}
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
