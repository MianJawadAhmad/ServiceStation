import React, { useState, useContext } from 'react';
import { View, Image } from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Left, Button, Right, Icon, Input } from 'native-base'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import styles from './Styles/mainStyles'


const Setting = (props) => {

    const { navigation } = props;

    return (
        <Container style={{ alignItems: 'center', justifyContent: 'center' }}>

            <View style={{ backgroundColor: '#F8CF52', flex: 1, width: '100%' }}>
            </View>

            <View style={{ flex: 3, width: '100%' }}>
            </View>

            <View style={{ backgroundColor: 'white', position: 'absolute', height: hp('90%'), width: wp('85%'), alignSelf: 'center', borderRadius: 20, top: hp('15%') }} >
                <Content>
                    <List style={{ marginTop: hp('10%') }}>
                        <ListItem >
                            <Left>
                                <Text >Account type</Text>
                            </Left>
                            <Right>
                                <Text >VIP</Text>
                            </Right>
                        </ListItem>
                        <ListItem selected>
                            <Left>
                                <Text >Change Email</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Change Phone number</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Change Password</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Language</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Currency</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Points</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>History</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Q&A</Text>
                            </Left>
                            <Right>
                            </Right>
                        </ListItem>
                        <ListItem noBorder>
                            <Left>
                                <Text>The sample queston goes here?</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forw" />
                            </Right>
                        </ListItem>
                        <ListItem noBorder>
                            <View style={{ alignItems: 'center', margin: hp('2%') }}>
                                <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</Text>
                            </View>
                        </ListItem>
                        <ListItem noBorder>
                            <Left>
                                <Text>The sample question goes here?</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forw" />
                            </Right>
                        </ListItem>

                        <ListItem noBorder>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold' }}>RATE</Text>
                                <Text>How likely would you recommend the app?</Text>
                            </View>
                        </ListItem>

                        <ListItem noBorder>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold' }}>????????</Text>
                            </View>
                        </ListItem>

                        <ListItem noBorder>
                            <Input style={{ backgroundColor: '#F5F5F5' }} placeholder='input' />
                        </ListItem>
                        <ListItem noBorder style={{ width: '100%' }}>
                            <Button block style={{ borderRadius: 10, width: wp('70%'), backgroundColor: '#F8CF52', margin: hp('2%') }} placeholder="Password"
                            >
                                <Text>
                                    SIGN IN
                                </Text>
                            </Button>
                        </ListItem>
                    </List>
                </Content>
            </View>
            <Image source={require('../Images/a1.jpg')} style={{ width: wp('25%'), height: hp('12%'), borderRadius: hp('25%'), borderWidth: 2, borderColor: 'white', top: hp('10%') }} position='absolute' />

        </Container>
    )

}

export default Setting;