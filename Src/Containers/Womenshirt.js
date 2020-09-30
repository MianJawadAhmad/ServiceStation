import React, { useState, useContext } from 'react';
import { ImageBackground, Pressable, StyleSheet, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Form, Item, Input, Button, Content, Left, Right, Body, Badge } from 'native-base';
import styles from './Styles/mainStyles'
import CarouselExample from './component/Carousel'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Womenshirt = (props) => {
  const { navigation } = props

  return (
    <Container style={{ flex: 1 }}>
        <Header>
            <Left>
                <Icon name='sear'/>
            </Left>
            <Body>

            </Body>
            <Right style={{flexDirection:'row'}}>
            <Icon name='search'/>
            <Icon name='sear'/>
            </Right>
        </Header>
        <View style={{position:'absolute',top:130}}>
        <CarouselExample/>
      </View>
      <View style={{ marginTop:hp('30%'),borderBottomWidth:0.5}}>
          <Text style={{fontSize:hp('3%'),marginLeft:hp('2%')}}>Women Shirt</Text>
          <Text style={{fontSize:hp('2%'),margin:hp('2%'),color:'#F8CF52'}}>$42</Text>
      </View>
      <View style={{ marginTop:hp('1%'),borderBottomWidth:0.5,flexDirection:'row'}}>
          <Text style={{fontSize:hp('3%'),marginLeft:hp('2%'),backgroundColor:'#F8CF52',color:'white',width:wp('15%'),height:hp('4%'),alignSelf:'center'}}>4.5</Text>
          <Text style={{fontSize:hp('2%'),margin:hp('2%')}}>Very Good</Text>
          <Text style={{fontSize:hp('2%'),margin:hp('2%'),color:'#F8CF52',alignSelf:'flex-end',right:0}}>Very Good</Text>
      </View>
      <View style={{borderBottomWidth:0.5}}>
      <Text style={{fontSize:hp('1.5%'),margin:hp('2%')}}>Description</Text>
      <Text style={{fontSize:hp('1.5%'),marginLeft:hp('2%'),marginBottom:hp('2%')}}>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',borderBottomWidth:0.5}}>
      <Text style={{fontSize:hp('1.7%'),margin:hp('2%')}}>Select Size</Text>
      <Text style={{fontSize:hp('1.7%'),margin:hp('2%'),marginBottom:hp('2%')}}>Select Color</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: hp('2%'),justifyContent:'center' }}>
                {/* <Image source={require('../Images/f.png')} style={{height:hp('7%')}} resizeMode='contain'/>
            <Image source={require('../Images/g2.png')} style={{height:hp('7%')}} resizeMode='contain'/>
            <Image source={require('../Images/t.png')} style={{height:hp('7%')}} resizeMode='contain'/> */}

                <Button style={{ height: hp('5%'), width: wp('13%'), backgroundColor: '#F3F3F3', justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 5, shadowOpacity: 0.1, shadowOffset: { width: 2, height: 2 }, elevation: 1 }}>
                  <Text style={{color:'black'}}>S</Text>
                </Button>

                <Button style={{ height: hp('5%'), width: wp('13%'), backgroundColor: '#F8CF52', justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 5, shadowOpacity: 0.1, shadowOffset: { width: 2, height: 2 }, elevation: 1 }}>
                <Text>M</Text>
                </Button>

                <Button style={{ height: hp('5%'), width: wp('13%'), backgroundColor: '#F3F3F3', justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 5, shadowOpacity: 0.1, shadowOffset: { width: 2, height: 2 }, elevation: 1 }}>
                  <Text style={{color:'black'}}>L</Text>
                </Button>
              </View>
              <Button block style={{ borderRadius: 10, backgroundColor: '#F8CF52', marginLeft: hp('5%'), marginRight: hp('5%'),margin:hp('2%') }} placeholder="Password"
                  onPress={() => navigation.navigate('checkout')}>
                  <Text>
                  buy now
                </Text>
                </Button>
    </Container>
  );
};



export default Womenshirt;