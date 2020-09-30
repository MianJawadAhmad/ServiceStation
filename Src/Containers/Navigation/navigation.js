import 'react-native-gesture-handler';
import * as React from 'react';
/*navigation*/
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/*Screen Import*/
import LaunchScreen from '../LaunchScreen'
import SignInScreen from '../SignInScreen'
import LanguageScreen from '../LanguageScreen'
import chooselanguage from '../chooselanguage'
import SignUpScreen from '../SignUpScreen'
import Nearby from '../Nearby'
import Store from '../Store'
import Messages from '../Messages'
import messageview from '../messageview'
import points from '../points'
import Setting from '../Setting'
import History from '../History'
import emailvarifications from '../emailvarifications'
import Womenshirt from '../Womenshirt'
import checkout from '../checkout'
import checkouttwo from '../checkouttwo'
import checkoutthird from '../checkoutthird'
import summary from '../summary'
import orderconfrimattion from '../orderconfrimattion'
import ordertracking from '../ordertracking'
import Call from '../Call'



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Nearby'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Launch" component={LaunchScreen} options={{ title: 'Launch Screen' }}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ title: 'SignInScreen' }} />
         <Stack.Screen name="LanguageScreen" component={LanguageScreen} options={{ title: 'Language Screen' }} />
         <Stack.Screen name='chooselanguage' component={chooselanguage} options={{ title: 'chooselanguage' }} />
         <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ title: 'SignUpScreen' }} />
         <Stack.Screen name='Nearby' component={Nearby} options={{ title: 'Nearby' }} />
         <Stack.Screen name='Store' component={Store} options={{ title: 'Store' }} />
         <Stack.Screen name='Messages' component={Messages} options={{ title: 'Messages' }} />
         <Stack.Screen name='messageview' component={messageview} options={{ title: 'messageview' }} />
         <Stack.Screen name='points' component={points} options={{ title: 'points' }} />
         <Stack.Screen name='Setting' component={Setting} options={{ title: 'Setting' }} />
         <Stack.Screen name='History' component={History} options={{ title: 'History' }} />
         <Stack.Screen name='emailvarifications' component={emailvarifications} options={{ title: 'emailvarifications' }} />
         <Stack.Screen name='Womenshirt' component={Womenshirt} options={{ title: 'Womenshirt' }} />
         <Stack.Screen name='checkout' component={checkout} options={{ title: 'checkout' }} />
         <Stack.Screen name='checkouttwo' component={checkouttwo} options={{ title: 'checkouttwo' }} />
         <Stack.Screen name='checkoutthird' component={checkoutthird} options={{ title: 'checkoutthird' }} />
         <Stack.Screen name='summary' component={summary} options={{ title: 'summary' }} />
         <Stack.Screen name='orderconfrimattion' component={orderconfrimattion} options={{ title: 'orderconfrimattion' }} />
         <Stack.Screen name='ordertracking' component={ordertracking} options={{ title: 'ordertracking' }} />
         <Stack.Screen name='Call' component={Call} options={{ title: 'Call' }} />
         
         
      </Stack.Navigator>
    </NavigationContainer>
  );
};

