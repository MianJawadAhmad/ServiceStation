import 'react-native-gesture-handler';
import * as React from 'react';
/*navigation*/
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/*Screen Import*/
import LaunchScreen from '../LaunchScreen'
import SignInScreen from '../SignInScreen'
import LanguageScreen from '../LanguageScreen'
import SignUpScreen from '../SignUpScreen'

// import clothsList from '../clothsList'
// import Details from '../Details'
// import Notification from '../Notification'
// import wishList from '../wishList'
// import Profile from '../Profile'
// import Cart from '../Cart'
// import Measurement from '../Measurement'
// import SignInScreen from '../SignInScreen'
// import SignUpScreen from '../SignUpScreen'

//import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignUpScreen'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Launch" component={LaunchScreen} options={{ title: 'Launch Screen' }}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ title: 'SignInScreen' }} />
         <Stack.Screen name="LanguageScreen" component={LanguageScreen} options={{ title: 'Language Screen' }} />
         <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ title: 'SignUpScreen' }} />

        {/*<Stack.Screen name='List' component={clothsList} options={{ title: 'Cloths List' }} />
        <Stack.Screen name='Detail' component={Details} options={{ title: 'Detail' }} />
        <Stack.Screen name='Cart' component={Cart} options={{ title: 'Cart' }} />
        <Stack.Screen name='Measurement' component={Measurement} options={{ title: 'Measurement' }} />
        <Stack.Screen name='SignInScreen' component={SignInScreen} options={{ title: 'SignInScreen' }} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ title: 'SignUpScreen' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

