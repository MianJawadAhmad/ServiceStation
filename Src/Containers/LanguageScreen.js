import React, { useState, useContext } from 'react';
import { ImageBackground, View, Image, TouchableOpacity } from 'react-native'
import { Container, Text, Button, Left, Body, Right } from 'native-base'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import styles from './Styles/mainStyles'


const LanguageScreen = (props) => {
  const { navigation } = props;


  return (
    <Container>
      <ImageBackground
        source={require('../Images/language.png')} style={{ flex: 1, width: wp('100%'), height: hp('100%') }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Image source={require('../Images/image1.png')} resizeMode='contain' style={{ width: wp('60%'), height: hp('30%') }} />
          </View>
          <View style={{ flex: 1.5, alignItems: 'center' }}>
            <Text style={{ fontSize: 28, fontFamily:'Poppins-Bold' }}>
              Language and Country
                    </Text>

            <Text style={{ fontSize: hp('2%'), margin: hp('3%'), textAlign: 'center' }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    </Text>

            <Button block style={{ borderRadius: 10, backgroundColor: '#FFFFFF', margin: hp('2%'), marginTop: hp('5%'), height: hp('6%'), shadowOpacity: 0.1, shadowOffset: { width: 2, height: 2 }, elevation: 1 }} placeholder="Password"
              onPress={() => navigation.navigate('chooselanguage')}>
              <Left style={{flex:1,alignItems:'center'}}>
                <Image source={require('../Images/flag.png')} resizeMode='contain' style={{ width: wp('9%'), height: hp('8%') }} />
              </Left>
              <Body style={{flex:3}}>
                <Text style={{fontFamily:'Poppins-Light',fontSize:16,color:'#000000'}}>
                Select Language
                </Text>
              </Body>
              <Right style={{flex:3}}/>

            </Button>
            <Button block style={{ borderRadius: 10, backgroundColor: '#FFFFFF', margin: hp('2%'), marginTop: hp('1%'), height: hp('6%'), shadowOpacity: 0.1, shadowOffset: { width: 2, height: 2 }, elevation: 1 }} placeholder="Password"
              onPress={() => navigation.navigate('chooselanguage')}>
              <Left style={{flex:1,alignItems:'center'}}>
                <Image source={require('../Images/flag1.png')} resizeMode='contain' style={{ width: wp('9%'), height: hp('8%') }} />
              </Left>
              <Body style={{flex:3}}>
                <Text style={{fontFamily:'Poppins-Light',fontSize:16,color:'#000000'}}>
                Select Country
                </Text>
              </Body>
              <Right style={{flex:3}}/>

            </Button>


            <Button block style={{ borderRadius: 10, backgroundColor: '#F8CF52', margin: hp('2%'), marginTop: hp('8%') }} placeholder="Password"
              onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={{fontFamily:'Poppins-Medium',fontSize:15,color:'#FFFFFF'}}>
                NEXT
                </Text>
            </Button>
          </View>
        </View>

      </ImageBackground>
    </Container>
  )

}

export default LanguageScreen;