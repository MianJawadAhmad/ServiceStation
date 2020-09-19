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

const SignUpScreen = ({ navigation }) => {

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
                    <Text style={styles.text_header}>Sign UP</Text>
                    <Text style={styles.text_headerr}>Lorem ipsum dolor sit</Text>
                    <View style={{ alignItems: 'center', marginTop: hp('3%') }}>
                        <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Form style={{ alignItems: 'center' }}>
                                <Item style={{ borderBottomWidth: 0, flexDirection: 'row' }}>
                                    <Button iconLeft style={{ width: wp('44%'), height: hp('6%'), margin: hp('1%'), borderRadius: 12, backgroundColor: '#F8CF52' }}>
                                        <Image source={require('../Images/bus.png')}  style={{ flex: 1 }} resizeMode='contain'/>
                                        <Text style={{ flex: 3, fontWeight:'bold' }}>Client</Text>
                                    </Button>
                                    <Button iconLeft style={{ width: wp('44%'), height: hp('6%'), margin: hp('1%'), borderRadius: 12, backgroundColor: '#EAECEF' }}>
                                        <Image source={require('../Images/bag.png')} style={{ flex: 1}} resizeMode='contain'/>
                                        <Text style={{ flex: 3, color: 'black', fontWeight:'bold' }}>Business </Text>
                                    </Button>
                                </Item>
                                <Item style={{ borderBottomWidth: 0 }}>
                                    <Input style={styles.inputAll} placeholder="Username" />
                                </Item>
                                <Item style={{ borderBottomWidth: 0 }}>
                                    <Input style={styles.inputAll} placeholder="Password" />
                                </Item>
                                <Item style={{ borderBottomWidth: 0 }}>
                                    <Input style={styles.inputAll} placeholder="Username" />
                                </Item>
                                <Item style={{ borderBottomWidth: 0 }}>
                                    <Input style={styles.inputAll} placeholder="Password" />
                                </Item>
                                <Item style={{ borderBottomWidth: 0 }}>
                                    <Input style={styles.inputAll} placeholder="Password" />
                                </Item>
                                <Item style={{ borderBottomWidth: 0, flexDirection: 'row' }}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        iosHeader="Gender"
                                        style={{ width: wp('44%'), height: hp('6%'), margin: hp('1%'), backgroundColor: '#FFFFFF', shadowOpacity: 0.3, shadowOffset: { width: 2, height: 2 }, elevation: 1, borderRadius: 10 }}
                                        selectedValue={SelectedCountry}
                                        onValueChange={this.onValueCountry.bind(this)}>
                                        <Picker.Item label="Gender" value="key0" />
                                        <Picker.Item label="Male" value="key1" />
                                        <Picker.Item label="Female" value="key2" />
                                        <Picker.Item label="Other" value="key3" />

                                    </Picker>
                                    <Input placeholder="Business Type" style={{ width: wp('44%'), height: hp('6%'), margin: hp('1%'), backgroundColor: '#FFFFFF', shadowOpacity: 0.3, shadowOffset: { width: 2, height: 2 }, elevation: 1, borderRadius: 10 }} />
                                </Item>
                            </Form>
                        </View>
                        <View style={{ flex: 5, alignItems: 'center', marginTop: hp('4%') }}>
                            <Text style={{color:'#7F838D'}}>
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
                                <Button transparent>
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
        margin: hp('1%'),
        shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 1 },
        elevation: 1,
        backgroundColor: 'white',
        marginTop: hp('2%'),
    }
});