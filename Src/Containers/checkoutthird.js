import React, { useState, useContext } from 'react';
import { ImageBackground, Pressable, StyleSheet, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, CardItem, Card, Right, Button, Badge, Left, Body, ListItem, Switch } from 'native-base';
import styles from './Styles/mainStyles'
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const cards = [
    { text: 'a', name: 'One', uri: require('../Images/clip.png') },
    { text: 'Fake Shack Burger', name: 'two', uri: require('../Images/clip.png') },
    { text: 'Card Three', name: 'three', uri: require('../Images/clip.png') },

];
const checkoutthird = (props) => {
    const { navigation } = props

    _renderItem = ({ item, index }, parallaxProps) => {
        return (

            <ParallaxImage
                source={item.uri}
                containerStyle={{ height: hp('20%'), width: wp('80%'), borderRadius: 8, marginTop: 10, marginBottom: 10, alignSelf: 'center' }}
                style={{ height: hp('20%'), width: wp('90%'), borderRadius: 8, marginTop: 10, marginBottom: 10, resizeMode: 'contain', alignSelf: 'center' }}
                parallaxFactor={0.4}
                {...parallaxProps}
            />
        );
    }


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
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.6 }}>
                    <Image source={require('../Images/STEP3.png')} style={{ height: hp('7%') }} resizeMode='contain' />
                </View>
                <View style={{ alignItems: 'center', flex: 2 }}>
                    <View style={{ alignItems: 'center', width: '100%' }}>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={cards}
                            layout={'default'}
                            renderItem={this._renderItem}
                            sliderWidth={wp('100%')}
                            itemWidth={wp('65%')}
                            hasParallaxImages={true}
                            inactiveSlideScale={0.50}
                        />

                    </View>
                </View>
                <View style={{ flex: 1.5, marginLeft: hp('3%') }}>
                    <Text >Add new payment method</Text>

                    <ListItem icon style={{ marginTop: hp('3%') }}>
                        <Left>
                            <Icon name="apple" />
                        </Left>
                        <Body>
                            <Text>Apple Pay</Text>
                        </Body>
                        <Right>
                            <Icon name='add' />
                        </Right>
                    </ListItem>
                    <ListItem icon style={{ marginTop: hp('1.5%') }}>
                        <Left>
                            <Icon name="apple" />
                        </Left>
                        <Body>
                            <Text>MasterCard</Text>
                        </Body>
                        <Right>
                            <Icon name='add' />
                        </Right>
                    </ListItem>
                    <ListItem icon style={{ marginTop: hp('1.5%') }}>
                        <Left>
                            <Icon name="apple" />
                        </Left>
                        <Body>
                            <Text>Local Debit</Text>
                        </Body>
                        <Right>
                            <Icon name='add' />
                        </Right>
                    </ListItem>
                </View>

                <View style={{ flex: 1 }}>
                    <Button block style={{ borderRadius: 10, backgroundColor: '#F8CF52', margin: hp('2%'), }} placeholder="Password"
                        onPress={() => navigation.navigate('summary')}>
                        <Text>
                            NEXT
                </Text>
                    </Button>
                </View>

            </View>


        </Container>
    );
};



export default checkoutthird;