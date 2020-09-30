import React, { useState, useContext } from 'react';
import { ImageBackground, Pressable, StyleSheet, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { Container, Text, ListItem, Content,List } from 'native-base';
import styles from './Styles/mainStyles'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const chooselanguage = (props) => {
  const { navigation } = props

  return (
    <Container style={{ flex: 1 }}>
    <Content>
    <Text style={{fontSize:hp('3%'),marginTop:hp('10%'),marginLeft:hp('2%'),fontWeight:'bold'}}>Choose language</Text>
          <List style={{marginTop:hp('2%')}}>
            <ListItem noBorder onPress={()=>navigation.navigate('SignUpScreen')}>
              <Text>Arabic</Text>
            </ListItem>
            <ListItem noBorder onPress={()=>navigation.navigate('SignUpScreen')}>
              <Text>Chinese</Text>
            </ListItem>
            <ListItem noBorder onPress={()=>navigation.navigate('SignUpScreen')}>
              <Text>English</Text>
            </ListItem>
            <ListItem noBorder onPress={()=>navigation.navigate('SignUpScreen')}>
              <Text>Korean</Text>
            </ListItem>
            <ListItem noBorder onPress={()=>navigation.navigate('SignUpScreen')}>
              <Text>Urdu</Text>
            </ListItem>
          </List>
        </Content>
    </Container>
  );
};



export default chooselanguage;