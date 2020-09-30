import React, { useState, useContext } from 'react';
import { FlatList, Image, View } from 'react-native';
import { Container, Button, Text } from 'native-base';
import styles from './Styles/mainStyles'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const orderconfrimattion = (props) => {
    const { navigation } = props

    return (
        <Container style={{ flex: 1 }}>
            <View style={{ flex: 5, alignItems: 'center', marginTop: hp('20%') }}>
                <Image source={require('../Images/LIKE.png')} style={{ width: wp('50%'), height: hp('25%') }} resizeMode='contain' />
                <Text style={{ fontSize: hp('4%'), marginTop: hp('3%'), marginLeft: hp('3%'), marginRight: hp('3%') }}>Confirmation</Text>
                <Text style={{ fontSize: hp('2%'), marginTop: hp('1%'), marginLeft: hp('3%'), marginRight: hp('3%'), textAlign: 'center', color: '#656565' }}>You have successfully completed your payment procedure</Text>
            </View>

            <View style={{ flex: 1 }}>
                <Button block style={{ borderRadius: 10, backgroundColor: '#F8CF52', margin: hp('2%'), }} placeholder="Password"
                    onPress={() => navigation.navigate('ordertracking')}>
                    <Text>TRACK ORDER</Text>
                </Button>
            </View>

        </Container>
    );
};



export default orderconfrimattion;