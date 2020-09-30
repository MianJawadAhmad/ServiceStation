import React, { useState, useContext } from 'react';
import { FlatList, Image } from 'react-native';
import { Container, Header, Content, Button, Text, Card, CardItem, Body, List, ListItem, Thumbnail, Left, Right, Icon } from 'native-base';
import styles from './Styles/mainStyles'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const History = (props) => {
    const { navigation } = props

    return (
        <Container style={{ flex: 1 }}>
            <Header style={{backgroundColor:'white',borderBottomColor:'white'}}>
                <Left>
                    <Icon />
                </Left>
                <Body>
                    <Text style={{fontWeight:'bold'}}>History</Text>
                </Body>
                <Right/>
            </Header>
            <Content padder>
            <Text style={{marginLeft:hp('1%'),marginTop:hp('2%'),marginBottom:hp('2%')}}>This Week</Text>
                <Card>
                    <CardItem bordered>
                        <List style={{ flex: 1 }}>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail style={{borderRadius:10}} square source={require('../Images/a1.jpg')} />
                                </Left>
                                <Body>
                                    <Text>Sankhadeep</Text>
                                    <Text style={{color:'#FA6400'}}>$ 44.00</Text>
                                </Body>
                                <Right>
                                </Right>
                            </ListItem>
                        </List>
                    </CardItem>
                    <CardItem bordered>
                        <List style={{ flex: 1 }}>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail style={{borderRadius:10}} square source={require('../Images/a1.jpg')} />
                                </Left>
                                <Body>
                                    <Text>Sankhadeep</Text>
                                    <Text style={{color:'#FA6400'}}>$ 44.00</Text>
                                </Body>
                                <Right>
                                </Right>
                            </ListItem>
                        </List>
                    </CardItem>
                </Card>

                <Text style={{marginLeft:hp('1%'),marginTop:hp('2%'),marginBottom:hp('2%')}}>This Month</Text>
                <Card>
                    <CardItem bordered>
                        <List style={{ flex: 1 }}>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail square source={require('../Images/a1.jpg')} style={{borderRadius:10}}/>
                                </Left>
                                <Body>
                                    <Text>Sankhadeep</Text>
                                    <Text style={{color:'#FA6400'}}>$ 44.00</Text>
                                </Body>
                                <Right>
                                </Right>
                            </ListItem>
                        </List>
                    </CardItem>
                    <CardItem bordered>
                        <List style={{ flex: 1 }}>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail style={{borderRadius:10}} square source={require('../Images/a1.jpg')} />
                                </Left>
                                <Body>
                                    <Text>Sankhadeep</Text>
                                    <Text style={{color:'#FA6400'}}>$ 44.00</Text>
                                </Body>
                                <Right>
                                </Right>
                            </ListItem>
                        </List>
                    </CardItem>
                </Card>

            </Content>

        </Container>
    );
};



export default History;