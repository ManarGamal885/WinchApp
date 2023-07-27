import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from "./pages/signupIn/start"
import Login from "./pages/signupIn/Login"
import { NetworkStatus } from "./pages/signupIn/NetworkStatus"
import SignUp from "./pages/signupIn/Signup"
import F1 from "./pages/forgetPass/ForgetPass1"
import F2 from "./pages/forgetPass/ForgetPass2"
import F3 from "./pages/forgetPass/ForgetPass3"
import HomeUser from './pages/user/HomeUser'
import Set from './pages/user/SettingsUser'
import Winch from './pages/user/Winch'
import Mech from './pages/user/MechanicWorkshop'
import Ri from './pages/user/Review'
import MessLi from './pages/chat/MessagesList'
import HomeOther from './pages/other/HomeOther'
import SetOther from './pages/other/SettingsOther'
import Chat from './pages/chat/Chat'
// import Navigator from './route/homeStack'
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator
  , TransitionPresets
} from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NetworkStatus>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            ...TransitionPresets.ScaleFromCenterAndroid,
          }}
        >
          <Stack.Screen
            name="Start"
            component={Start}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="F1"
            component={F1}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="F2"
            component={F2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="F3"
            component={F3}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="HomeUser"
            component={HomeUser}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Set"
            component={Set}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="Winch"
            component={Winch}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Mech"
            component={Mech}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Ri"
            component={Ri}
            options={{ headerShown: false }}
          />
                <Stack.Screen
            name="MessLi"
            component={MessLi}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeOther"
            component={HomeOther}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="SetOther"
            component={SetOther}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NetworkStatus>
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
