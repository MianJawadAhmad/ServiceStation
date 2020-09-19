// import React, { useState, useContext } from 'react';
// import { ImageBackground, Pressable, StyleSheet, View, TouchableOpacity, FlatList,Image } from 'react-native';
// import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Form, Item, Input, Button, Content, Left, Right, Body, Badge } from 'native-base';
// import styles from './Styles/mainStyles'

// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

// const HomeScreen = (props) => {
//   const { navigation } = props

//   return (
//     <Container style={{ flex: 1 }}>
//       <ImageBackground
//         source={require('../Images/Signin.png')} style={{ flex: 1, width: wp('100%'), height: hp('100%') }}>
//         <View style={{ flex: 1 }}>
//           <View style={{ flex: 1 }}></View>
//           <View style={{ flex: 1.8 }}>
//             <View style={{ flex: 1 }}>
//               <Text style={{ fontSize: hp('5%'), fontWeight: '500', marginLeft: hp('3%') }}>Sign In</Text>
//             </View>
//             <View style={{ flex: 5,justifyContent: 'center', alignItems: 'center' }}>
//               <Form style={{ justifyContent: 'center', alignItems: 'center' }}>
//                 <Item style={{ borderBottomWidth: 0}}>
//                   <Input style={{ borderRadius: 10,  margin: hp('1%'),shadowOpacity: 0.9,shadowOffset : { width: 2, height: 2},elevation: 1, borderWidth:0.3, borderColor:'#F5F7FA'}} placeholder="Username" />
//                 </Item>
//                 <Item style={{ borderBottomWidth: 0 }}>
//                   <Input style={{ borderRadius: 10,  margin: hp('1%'),shadowOpacity: 0.9,shadowOffset : { width: 2, height: 2},elevation: 1, borderWidth:0.3, borderColor:'#F5F7FA' }} placeholder="Password" />
//                 </Item>
//                 <Button block style={{ borderRadius: 10, backgroundColor: '#F8CF52', margin: hp('2%') }} placeholder="Password"
//                 onPress={()=>navigation.navigate('LanguageScreen')}>
//                   <Text>
//                     SIGN IN
//                 </Text>
//                 </Button>

//               </Form>
//             </View>
//             <View style={{flex:5, alignItems:'center'}}>
//             <Text >
//                 Sign In Using
//             </Text>
//             <View style={{flexDirection:'row',marginTop:hp('2%')}}>
//             {/* <Image source={require('../Images/f.png')} style={{height:hp('7%')}} resizeMode='contain'/>
//             <Image source={require('../Images/g2.png')} style={{height:hp('7%')}} resizeMode='contain'/>
//             <Image source={require('../Images/t.png')} style={{height:hp('7%')}} resizeMode='contain'/> */}

//             <Button style={{height:hp('7%'),width:wp('20%'),backgroundColor:'#3B5998', justifyContent:'center',alignItems:'center', borderRadius:10, margin:5,shadowOpacity: 0.1,shadowOffset : { width: 2, height: 2},elevation: 1}}>
//                 <Image source={require('../Images/facebook.png')} style={{height:hp('7%')}} resizeMode='contain'/>
//             </Button>

//             <Button style={{height:hp('7%'),width:wp('20%'),backgroundColor:'#FFFFFF', justifyContent:'center',alignItems:'center', borderRadius:10, margin:5,shadowOpacity: 0.1,shadowOffset : { width: 2, height: 2},elevation: 1}}>
//                 <Image source={require('../Images/google.png')} style={{height:hp('7%')}} resizeMode='contain'/>
//             </Button>

//             <Button style={{height:hp('7%'),width:wp('20%'),backgroundColor:'#00ACED', justifyContent:'center',alignItems:'center', borderRadius:10, margin:5,shadowOpacity: 0.1,shadowOffset : { width: 2, height: 2},elevation: 1}}>
//                 <Image source={require('../Images/twitter.png')} style={{height:hp('7%')}} resizeMode='contain'/>
//             </Button>
//             </View>
//             <Text style={{marginTop:hp('3%')}}>
//             Don't have an account? Sign Up
//             </Text>
//             </View>

//           </View>

//         </View>


//       </ImageBackground>
//     </Container>
//   );
// };



// export default HomeScreen;