import React, { useState, useContext } from 'react';
import { FlatList, Image, View } from 'react-native';
import { Container, Header, Content, Button, Text, Card, CardItem, Body, List, ListItem, Thumbnail, Left, Right, Icon } from 'native-base';
import styles from './Styles/mainStyles'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const summary = (props) => {
    const { navigation } = props

    return (
        <Container style={{ flex: 1 }}>
            <Header style={{ backgroundColor: 'white', borderBottomColor: 'white' }}>
                <Left>
                    <Icon />
                </Left>
                <Body>
                    <Text style={{ fontWeight: 'bold' }}>Summary</Text>
                </Body>
                <Right />
            </Header>
            <View style={{ flex: 5 }}>
                <Content padder>
                    <ListItem noBorder>
                        <Left>
                            <Text style={{ marginLeft: hp('1%'), marginTop: hp('2%'), marginBottom: hp('2%') }}>Order List</Text>
                        </Left>
                        <Body>
                        </Body>
                        <Right>
                            <Icon name='arrow-down' />
                        </Right>
                    </ListItem>

                    <Card>
                        <CardItem bordered>
                            <List style={{ flex: 1 }}>
                                <ListItem thumbnail noBorder>
                                    <Left>
                                        <Thumbnail style={{ borderRadius: 10 }} square source={require('../Images/a1.jpg')} />
                                    </Left>
                                    <Body>
                                        <Text>Sankhadeep</Text>
                                        <Text style={{ color: '#FA6400' }}>$ 44.00</Text>
                                    </Body>
                                    <Right style={{ flexDirection: 'row' }}>
                                        <Icon name='md-remove' style={{ backgroundColor: '#727C8E' }} />
                                        <Text style={{ marginRight: hp('1%'), marginLeft: hp('1%') }}>1</Text>
                                        <Icon name='add' style={{ backgroundColor: '#727C8E' }} />
                                    </Right>
                                </ListItem>
                            </List>
                        </CardItem>
                        <CardItem bordered>
                            <List style={{ flex: 1 }}>
                                <ListItem thumbnail noBorder>
                                    <Left>
                                        <Thumbnail style={{ borderRadius: 10 }} square source={require('../Images/a1.jpg')} />
                                    </Left>
                                    <Body>
                                        <Text>Sankhadeep</Text>
                                        <Text style={{ color: '#FA6400' }}>$ 44.00</Text>
                                    </Body>
                                    <Right style={{ flexDirection: 'row' }}>
                                        <Icon name='md-remove' style={{ backgroundColor: '#727C8E' }} />
                                        <Text style={{ marginRight: hp('1%'), marginLeft: hp('1%') }}>1</Text>
                                        <Icon name='add' style={{ backgroundColor: '#727C8E' }} />
                                    </Right>
                                </ListItem>
                            </List>
                        </CardItem>
                    </Card>


                    <Card style={{ marginTop: hp('3%') }}>
                        <CardItem bordered>
                            <List style={{ flex: 1 }}>
                                <ListItem noBorder>
                                    <Body>
                                        <Text>Shipping Address</Text>
                                        <Text style={{ color: '#414B5A', marginTop: hp('2%') }}>Jl. Geusan Ulun No.11, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115</Text>
                                    </Body>
                                </ListItem>
                            </List>
                        </CardItem>
                    </Card>

                    <Card style={{ marginTop: hp('1%') }}>
                        <CardItem bordered>
                            <List style={{ flex: 1 }}>
                                <Text>Shipping Address</Text>
                                <ListItem noBorder thumbnail>
                                    <Left>
                                        <Thumbnail style={{ borderRadius: 10 }} square source={require('../Images/Bitmap.png')} resizeMode='contain' />
                                    </Left>
                                    <Body>
                                        <Text style={{ color: '#707070' }}>Master Card</Text>
                                        <Text style={{ color: '#707070' }}>**** **** **** 4595</Text>
                                    </Body>
                                </ListItem>
                            </List>
                        </CardItem>
                    </Card>
                </Content>
            </View>
            <View style={{ flex: 1 }}>
                <Button block style={{ borderRadius: 10, backgroundColor: '#F8CF52', margin: hp('2%'), }} placeholder="Password"
                    onPress={() => navigation.navigate('orderconfrimattion')}>
                    <Text>
                        NEXT
                </Text>
                </Button>
            </View>

        </Container>
    );
};



export default summary;