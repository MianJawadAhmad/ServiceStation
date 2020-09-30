import React, { useState, useContext } from 'react';
import { ImageBackground, Pressable, StyleSheet, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, CardItem, Card, Right, Button, Badge, Left, Body } from 'native-base';
import styles from './Styles/mainStyles'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const checkouttwo = (props) => {
    const { navigation } = props

    return (
        <Container style={{ flex: 1 }}>
            <Header style={{ borderBottomColor: 'white', backgroundColor: 'white' }}>
                <Left>
                    <Icon name='sear' />
                </Left>
                <Body>
                    <Text>Checkout</Text>
                </Body>
                <Right />
            </Header>
            <View style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Image source={require('../Images/STEP2.png')} style={{ height: hp('7%') }} resizeMode='contain' />
                </View>
                <View style={{ alignItems: 'center', flex: 4 }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Icon name='check-circle' />
                        <Card style={{ marginTop: hp('2%'), height: hp('16%'), borderRadius: 15 }}>
                            <CardItem style={{ width: wp('80%'), alignItems: 'center', marginTop: hp('1%') }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: hp('2%') }}>Mike Roberto</Text>
                                    <Text style={{ marginTop: hp('1.5') }}>Lorem ipsum dolor sit amet, consetetur</Text>
                                    <Text style={{ marginTop: hp('0.5') }}>(+965) 425 906 4618</Text>
                                    <Text style={{ marginTop: hp('0.5') }}>Zip code: 92053</Text>
                                </View>
                            </CardItem>
                        </Card>

                    </View>
                    <Button style={{ borderRadius: 10, backgroundColor: '#FFFFFF', margin: hp('2%'), marginLeft: hp('5%'), width: wp('50%'), height: hp('6%'), borderWidth: 1, borderColor: '#DBDBDE' }} placeholder="Password"
                        onPress={() => navigation.navigate('LanguageScreen')}>
                        <Text style={{ color: 'black' }}>
                            Add new address
                </Text>
                        <Icon name='add' style={{ color: 'black' }} />
                    </Button>
                </View>
                <View style={{ flex: 1 }}>
                    <Button block style={{ borderRadius: 10, backgroundColor: '#F8CF52', margin: hp('2%'), }} placeholder="Password"
                        onPress={() => navigation.navigate('checkoutthird')}>
                        <Text>
                            NEXT
                </Text>
                    </Button>
                </View>

            </View>


        </Container>
    );
};



export default checkouttwo;