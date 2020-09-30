import React, { useState, useEffect } from 'react';
import { View, FlatList, ImageBackground, Image,TouchableOpacity } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Button, Body, Right, Item, Input, Text, Badge, Icon, Footer } from 'native-base'
import styles from './Styles/mainStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import * as Animatable from 'react-native-animatable';
const Nearby = (props) => {
    const { navigation } = props;
    const [data, setData] = useState({
        zIndex: -1,
        zIndex1: -1,
        zIndex2: -1,
        show: false,

    });

    useEffect(() => {
        // Update the document title using the browser API
        // this.view.fadeOutDown(10)
    });

    onShow = () => {

        // setData({ zIndex: 100 })
        // this.view.fadeInUp(400)
        if(data.show){
            this.view.fadeOutDown(400)
            this.view1.fadeOutUp(400)
            
          }else{
            setData({zIndex:500})
            setData({zIndex1:10})
            this.view.fadeInUp(400)
            
            this.view1.fadeInDown(400)
          }
          setData({show : !data.show})

    }



    onDown = () => {
        if(data.show){
            this.view.fadeOutDown(400)
            this.view1.fadeOutUp(400)
            setData({show : false,zIndex1:0,zIndex:-1 })
          }

    }


    return (
        <Container style={{ flex: 1 }}>
            <ImageBackground 
                source={require('../Images/content.png')} style={{ flex: 1, width: wp('100%'), height: hp('100%'), alignItems: 'center' }}>
                <View style={{ width: wp('100%'), marginTop: hp('7%'), alignItems: 'center' }}>
                    <Item style={{ backgroundColor: 'white', flexDirection: 'row', width: wp('90%'), borderRadius: 10, shadowOpacity: 0.2, shadowOffset: { width: 1, height: 1 }, elevation: 1, }}>
                        <Icon name="menu" style={{ color: '#454F63' }} />
                        <Input placeholder="Search" />
                    </Item>
                </View>

                <Animatable.View ref={ref => this.view1 = ref}
          style={{backgroundColor : 'rgba(0,0,0,0.7)',height: hp('80%'), zIndex:data.zIndex1, position : 'absolute', top : 0, right : 0, width : wp('100%')}}>
        <TouchableOpacity onPress={()=>onDown()} style={{height:hp('80%')}}></TouchableOpacity>
        </Animatable.View>

                <Content>

                </Content>
                <View style={{ width: wp('100%'), alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: hp('2%'), marginBottom: hp('3%') }}>
                    <Button  style={{ height: hp('6%'), width: wp('14%'), backgroundColor: '#FFFFFF', alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 5, shadowOpacity: 0.1, shadowOffset: { width: 2, height: 2 }, elevation: 1 }}>
                        <Image source={require('../Images/icons-setting.png')} resizeMode='contain' />
                    </Button>

                    <Button  style={{ height: hp('6%'), width: wp('14%'), backgroundColor: '#FFFFFF', alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 5, shadowOpacity: 0.1, shadowOffset: { width: 2, height: 2 }, elevation: 1 }}>
                        <Image source={require('../Images/icons-gps.png')} resizeMode='contain' />
                    </Button>
                </View>

                <View style={{ width: wp('100%'), height: hp('12%'), backgroundColor: 'white', flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Button style={{backgroundColor:'green'}}>
                        <Image source={require('../Images/icons-arr.png')} onPress={() => onShow()} resizeMode='contain'/>
                        </Button>
                    </View>
                    <View style={{ flex: 5, justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>Nearby</Text>
                        <Text>Shoping, food, places</Text>
                    </View>
                </View>

                <Animatable.View ref={ref => this.view = ref}
                    style={{ backgroundColor: '#F5F5F5', zIndex: data.zIndex, position: 'absolute', bottom: 0, left: 0, width: wp('20%') }}>
                    <View style={{ width: wp('100%'), backgroundColor: '#F5F5F5' }}>
                        <View style={{ margin: hp('2%') }}>
                            <Text style={{ fontWeight: 'bold' }}>4 min away</Text>
                        </View>
                        <View style={{ justifyContent: 'center',alignItems:'center' }}>
                        <View style={{ flex: 1, flexDirection: 'row', margin: hp('2%') }}>
                        <Image source={require('../Images/bag.png')} resizeMode='contain'style={{margin: hp('2%') }}/>
                                <View style={{margin: hp('2%') }}>
                                    <Text style={{ fontWeight: 'bold',width:wp('50%') }}>Al Barka Moving Ltd. </Text>
                                    <Text style={{width:wp('50%') }}>www.example.com</Text>
                                </View>
                                <Icon name='menu'  style={{margin: hp('2%') }}/>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', margin: hp('1%') }}>
                                <Icon name='location'  style={{margin: hp('2%') }}/>
                                <View style={{margin: hp('2%') }}>
                                    <Text style={{ fontWeight: 'bold',width:wp('50%') }}>Street 7 81 Al Kuywayt Al </Text>
                                    <Text style={{ width:wp('50%')}}>Farwaniyah Kuwait</Text>
                                </View>
                                <Icon name='menu' style={{margin: hp('2%') }}/>
                                
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', width: wp('100%') }}>
                                <Button style={{ borderRadius: 10, backgroundColor: 'white',borderColor:'#F8CF52',borderWidth:2 ,margin: hp('2%'), width: wp('70%'),alignSelf:'center', alignItems: 'center', justifyContent: 'center' }} placeholder="Password"
                                    onPress={()=>navigation.navigate('Store')}>
                                    <Text style={{color:'#F8CF52'}}>
                                    Shop Now
                                    </Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Animatable.View>

            </ImageBackground>
        </Container>
    )
}

export default Nearby;