import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native';
import { Icon, Button, Text, Form, Item, Input, Picker } from 'native-base'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const SignUpScreen = (props) => {
    const { navigation } = props
    const [SelectedLangugae, setSelectedLangugae] = useState("key0")
    const [SelectedCountry, setSelectedCountry] = useState("key0")

    onLangugae = (value) => {

        setSelectedLangugae(value)
    }

    onValueCountry = (value) => {

        setSelectedCountry(value)
    }



    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../Images/Signup.png')} style={{ flex: 1, width: wp('100%'), height: hp('100%') }}>
                <ScrollView>
                    <Text style={{fontSize:40,fontFamily:'Poppins-Medium',marginTop:hp('10%'),marginLeft: hp('3%')}}>Sign UP</Text>
                    <Text style={{color: 'black',fontSize: 16,marginTop: hp('1%'),marginLeft: hp('3%'),fontFamily:'Poppins-Light'}}>Lorem ipsum dolor sit</Text>
                    <View style={{ alignItems: 'center', marginTop: hp('3%') }}>
                        <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Item style={{ borderBottomWidth: 0, flexDirection: 'row' }}>
                                    <Button iconLeft style={{ width: 180, height: 56, marginRight: hp('1%'), borderRadius: 12, backgroundColor: '#F8CF52' }}>
                                        <Image source={require('../Images/bus.png')} style={{ flex: 1 }} resizeMode='contain' />
                                        <Text style={{ flex: 3, fontFamily: 'Poppins-Medium', color: '#FFFFFF' }}>Business</Text>
                                    </Button>
                                    <Button icnLeft style={{ width: 180, height: 56, marginLeft: hp('1%'), borderRadius: 12, backgroundColor: '#EAECEF' }}>
                                        <Image source={require('../Images/bag.png')} style={{ flex: 1 }} resizeMode='contain' />
                                        <Text style={{ flex: 3, color: '#414141', fontFamily: 'Poppins-Medium' }}>Client </Text>
                                    </Button>
                                </Item>
                                <View style={{width:373}}>
                                <Item style={{ borderBottomWidth: 0 }}>
                                    <Input style={styles.inputAll} placeholder="Full Name" />
                                </Item>
                                <Item style={{ borderBottomWidth: 0 }}>
                                    <Input style={styles.inputAll} placeholder="Business Name" />
                                </Item>
                                <Item style={{ borderBottomWidth: 0 }}>
                                    <Input style={styles.inputAll} placeholder="Phone Number" />
                                </Item>
                                <Item style={{ borderBottomWidth: 0}}>
                                    <Input style={styles.inputAll} placeholder="Business Address" />
                                </Item>
                                <Item style={{ borderBottomWidth: 0 }}>
                                    <Input style={styles.inputAll} placeholder="Website" />
                                </Item>
                                <Item style={{ borderBottomWidth: 0, flexDirection: 'row',marginTop:hp('2%') }}>
                                    <Input placeholder="Gender" style={{ width:179, height: 52, marginRight: hp('1%'), backgroundColor: '#FFFFFF', shadowOpacity: 0.3, shadowOffset: { width: 2, height: 2 }, elevation: 1, borderRadius: 10 }} />
                                    <Input placeholder="Business Type" style={{ width:179, height: 52, marginLeft: hp('1%'), backgroundColor: '#FFFFFF', shadowOpacity: 0.3, shadowOffset: { width: 2, height: 2 }, elevation: 1, borderRadius: 10 }} />
                                </Item>
                                </View>
                                <Button block style={{width:374,height:52, borderRadius: 10, backgroundColor: '#F8CF52', margin: hp('1.5%'),marginTop: hp('5%') }} placeholder="Password"
                                    onPress={() => navigation.navigate('Nearby')}>
                                    <Text style={{color:'#FFFFFF',fontSize:15,fontFamily:'Poppins-Medium'}}>
                                        SIGN UP
                                    </Text>
                                </Button>
                            </View>
                        </View>
                        <View style={{ flex: 5, alignItems: 'center', marginTop: hp('4%') }}>
                            <Text style={{ color: '#7F838D' }}>
                                Login Using
                            </Text>
                            <View style={{ flexDirection: 'row', marginTop: hp('3%') }}>

                                <Button style={{ height: hp('7%'), width: wp('20%'), backgroundColor: '#3B5998', justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 5, shadowOpacity: 0.1, shadowOffset: { width: 2, height: 2 }, elevation: 1 }}>
                                    <Image source={require('../Images/facebook.png')} style={{ height: hp('7%') }} resizeMode='contain' />
                                </Button>

                                <Button style={{ height: hp('7%'), width: wp('20%'), backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 5, shadowOpacity: 0.1, shadowOffset: { width: 2, height: 2 }, elevation: 1 }}>
                                    <Image source={require('../Images/google.png')} style={{ height: hp('7%') }} resizeMode='contain' />
                                </Button>

                                <Button style={{ height: hp('7%'), width: wp('20%'), backgroundColor: '#00ACED', justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: 5, shadowOpacity: 0.1, shadowOffset: { width: 2, height: 2 }, elevation: 1 }}>
                                    <Image source={require('../Images/twitter.png')} style={{ height: hp('7%') }} resizeMode='contain' />
                                </Button>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: hp('3%') }}>
                                <Text style={{ color: '#7F838D', marginTop: hp('0.5%') }}>
                                    Already have an account?
                                </Text>
                                <Button transparent onPress={() => navigation.navigate('SignInScreen')}>
                                    <Text style={{ height: '100%', color: '#3497FD' }}>
                                        Sign in
                                    </Text>
                                </Button>
                            </View>
                        </View>


                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    text_header: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: hp('4%'),
        marginTop: hp('10%'),
        marginLeft: hp('3%')
    },
    text_headerr: {
        color: 'black',
        fontSize: hp('1.5%'),
        marginTop: hp('1%'),
        marginLeft: hp('3%')
    },
    inputAll: {
        borderRadius: 10,
        shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 1 },
        elevation: 1,
        backgroundColor: 'white',
        marginTop: hp('2%'),
    }
});