import React, { useState } from 'react';
import { View, Image } from 'react-native'
import { Container,Thumbnail,Text } from 'native-base'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import styles from './Styles/mainStyles'


const points = (props) => {
    
    const { navigation } = props;

    return (
        <Container style={{ alignItems: 'center', justifyContent: 'center' }}>

            <View style={{ backgroundColor: '#F8CF52', flex: 1, width: '100%' }}>

            </View>

            <View style={{  flex: 3, width: '100%' }}>

            </View>

            <View style={{ backgroundColor: 'white', position: 'absolute', height: hp('90%'), width: wp('85%'), alignSelf: 'center', alignItems: 'center',borderRadius:20,top:hp('15%') }} >
                <Text style={{ fontSize: hp('3%'), fontWeight: 'bold', marginTop: hp('9%') }}>Bethany (5th)</Text>
                <Text style={{ fontSize: hp('1%'), marginTop: hp('2%') }}>_____________________________________________________________________________</Text>
                <View style={{marginLeft:hp('1%')}}>
                    <Text style={{ fontSize: hp('1.5%'), fontWeight: 'bold', marginTop: hp('5%'),width:'100%' }}>Invite your friends  and get points</Text>
                    <View style={{ flexDirection: 'row', marginTop: hp('3%'), width:'100%' }}>
                        <Text style={{ fontSize: hp('2%'), flex: 1 }}>1st Price</Text>
                        <Text style={{ fontSize: hp('2%'), left:hp('7%'), flex: 1 }}>$10,000</Text>
                    </View>
                    <View style={{ flexDirection: 'row',width:'100%', marginTop: hp('1%'),  }}>
                        <Text style={{ fontSize: hp('2%'), flex: 1 }}>1st Price</Text>
                        <Text style={{ fontSize: hp('2%'), left:hp('7%'), flex: 1 }}>$10,000</Text>
                    </View>
                    <View style={{ flexDirection: 'row',width:'100%', marginTop: hp('1%'),  }}>
                        <Text style={{ fontSize: hp('2%'), flex: 1 }}>1st Price</Text>
                        <Text style={{ fontSize: hp('2%'), left:hp('7%'), flex: 1 }}>$10,000</Text>
                    </View>
                    <Text style={{ fontSize: hp('1%'), marginTop: hp('2%') }}>_____________________________________________________________________________</Text>
                </View>
                <View style={{marginLeft:hp('1%')}}>
                    <Text style={{ fontSize: hp('1.5%'), fontWeight: 'bold', marginTop: hp('5%'),width:'100%' }}>Top 1,000 get VIP Membership</Text>
                    <View style={{ flexDirection: 'row', marginTop: hp('3%'), width:'100%' }}>
                        <Text style={{ fontSize: hp('2%'), flex: 0.5 }}>1</Text>
                        <Thumbnail source={require('../Images/men/cl.png')} style={{flex: 1}}/>
                        <Text style={{ fontSize: hp('2%'), flex: 3 }}>User Name</Text>
                        <Text style={{ fontSize: hp('2%'), flex: 1 }}>9500</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp('3%'), width:'100%' }}>
                        <Text style={{ fontSize: hp('2%'), flex: 0.5 }}>1</Text>
                        <Thumbnail source={require('../Images/men/cl.png')} style={{flex: 1}}/>
                        <Text style={{ fontSize: hp('2%'), flex: 3 }}>User Name</Text>
                        <Text style={{ fontSize: hp('2%'), flex: 1 }}>9500</Text>
                    </View>
                </View>
            </View>
            <Image source={require('../Images/a1.jpg')} style={{ width: wp('25%'), height: hp('12%'), borderRadius: hp('25%'), borderWidth: 2, borderColor: 'white', top: hp('10%') }} position='absolute' />

        </Container>
    )

}

export default points;