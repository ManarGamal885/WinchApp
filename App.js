import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from "./pages/signupIn/start"
import Login from "./pages/signupIn/Login"
import SignUp from "./pages/signupIn/Signup"
import F1 from "./pages/forgetPass/ForgetPass1"
import F2 from "./pages/forgetPass/ForgetPass2"
import F3 from "./pages/forgetPass/ForgetPass3"
import HomeUser from './pages/user/HomeUser';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Start /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <F1 /> */}
      {/* <F2 /> */}
      {/* <F3 /> */}
      <HomeUser />
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
