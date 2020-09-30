import React, { useState, useContext } from 'react';
import { ImageBackground, Pressable, StyleSheet, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, CardItem, Card, Right, Button, Badge, Left, Body } from 'native-base';
import styles from './Styles/mainStyles'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const checkout = (props) => {
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
                    <Image source={require('../Images/STEP1.png')} style={{ height: hp('7%') }} resizeMode='contain' />
                </View>
                <View style={{ alignItems: 'center', flex: 4 }}>
                    <Card style={{ marginTop: hp('2%') }}>
                        <CardItem style={{ width: wp('80%') }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text>Reguler Delivery</Text>
                                <Text style={{ width: wp('60%'), marginTop: hp('2%') }} note>Order will be delivered between 3 - 5 business days</Text>
                            </View>
                            <Right>
                                <Icon name="search" />
                            </Right>
                        </CardItem>
                    </Card>

                    <Card style={{ marginTop: hp('2%') }}>
                        <CardItem style={{ width: wp('80%') }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text>Express Delivery</Text>
                                <Text style={{ width: wp('60%'), marginTop: hp('2%') }} note>Place your order before 6 pm and your items will be delivered</Text>
                            </View>
                            <Right>
                                <Icon name="search" />
                            </Right>
                        </CardItem>
                    </Card>
                </View>
                <View style={{ flex: 1 }}>
                    <Button block style={{ borderRadius: 10, backgroundColor: '#F8CF52', margin: hp('2%'), }} placeholder="Password"
                        onPress={() => navigation.navigate('checkouttwo')}>
                        <Text>
                            NEXT
                </Text>
                    </Button>
                </View>

            </View>


        </Container>
    );
};



export default checkout;