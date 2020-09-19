import React, { useState, useContext } from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native'
import { Container, Text, Header, Left, Right, Body, Icon, Badge, Card, Button, Content, ListItem, Switch } from 'native-base'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient';

import styles from './Styles/mainStyles'


const Profile = (props) => {

    const [Cloths, setCloths] = useState('')
    const { navigation } = props;

    return (
        <Container>
            <View style={{
                justifyContent: 'center',
                flex: 4,
                paddingTop: hp('2%'),
                backgroundColor: '#f1f1f1'
            }}>
                <Content scrollEnabled={false} style={{ flex: 4 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../Images/a1.jpg')} style={{ width: wp('55%'), height: hp('25%'), borderRadius: hp('25%'), borderWidth: 1 }} resizeMode={'contain'} />
                            <Text style={{ fontSize: hp('3%'), fontWeight: 'bold' }}>Mian Jawad Ahmad</Text>
                        </View>
                    </View>


                    <View style={{ flex: 1,marginTop:50 }}>

                        <ListItem icon>
                            <Left>
                                <Button style={{ backgroundColor: "#FF9501" }}>
                                    <Icon active name="airplane" />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Airplane Mode</Text>
                            </Body>
                            <Right>
                                <Switch value={false} />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => navigation.navigate('Measurement')}s>
                            <Left>
                                <Button style={{ backgroundColor: "#007AFF" }}>
                                    <Icon active name="wifi" />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Measurement</Text>
                            </Body>
                            <Right>
                                <Icon active name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </View>

                    {/* <Button style={{ justifyContent: 'center', marginTop: hp('4%'), backgroundColor: 'black', width: wp('40%'), height: hp('7%'), marginLeft:5 }}
                                onPress={() => navigation.navigate('Measurement')}>
                                <Text style={{ fontSize: hp('2.1%'), fontWeight: 'bold' }}>
                                    Measurement
                                </Text>
                            </Button> */}

                </Content>
            </View>

        </Container>
    )

}

export default Profile;