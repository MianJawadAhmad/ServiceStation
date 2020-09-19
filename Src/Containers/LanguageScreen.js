import React, { useState, useContext } from 'react';
import { ImageBackground,View, FlatList, Image, TouchableOpacity } from 'react-native'
import { Container, Text, Icon, Picker, Form,Button  } from 'native-base'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import styles from './Styles/mainStyles'


const LanguageScreen = (props) => {
    const [SelectedLangugae, setSelectedLangugae] = useState("key0")
    const [SelectedCountry, setSelectedCountry] = useState("key0")
    const { navigation } = props;

    onLangugae = (value) => {

        setSelectedLangugae(value)
      }

      onValueCountry = (value) => {

        setSelectedCountry(value)
      }


    return (
        <Container>
                 <ImageBackground
        source={require('../Images/language.png')} style={{ flex: 1, width: wp('100%'), height: hp('100%') }}>
            <View style={{flex:1}}>
                <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                    <Image source={require('../Images/image1.png')} resizeMode='contain' style={{ width: wp('60%'), height: hp('30%')}}/>
                </View>
                <View style={{flex:1.5, alignItems:'center'}}>
                    <Text style={{fontSize:hp('4%'), fontWeight:'700'}}>
                        Language and Country
                    </Text>

                    <Text style={{fontSize:hp('2%'),margin:hp('3%'), textAlign:'center'}}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    </Text>  


                     <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Image source={require('../Images/flag.png')}  resizeMode='contain' style={{marginRight:hp('2%')}}/>}
              iosHeader="Choose language"

              style={{ width: wp('90%'), backgroundColor:'#FFFFFF',shadowOpacity: 0.3,shadowOffset : { width: 2, height: 2},elevation: 1, borderRadius:10 ,marginTop:hp('5%') }}
              selectedValue={SelectedLangugae}
              onValueChange={this.onLangugae.bind(this)}
            >
              <Picker.Item label="Select Language" value="key0" />
              <Picker.Item label="English" value="key1" />
              <Picker.Item label="Urdu" value="key2" />
              <Picker.Item label="Pashto" value="key3" />
              <Picker.Item label="Germen" value="key4" />
            </Picker>

            <Picker
              mode="dropdown"
              iosIcon={<Image source={require('../Images/flag1.png')}  resizeMode='contain' style={{marginRight:hp('2%')}}/>}
              iosHeader="Select Country"

              style={{ width: wp('90%'), backgroundColor:'#FFFFFF',shadowOpacity: 0.3,shadowOffset : { width: 2, height: 2},elevation: 1, borderRadius:10, marginTop:hp('3%') }}
              selectedValue={SelectedCountry}
              onValueChange={this.onValueCountry.bind(this)}
            >
              <Picker.Item label="Select Country" value="key0" />
              <Picker.Item label="Pakistan" value="key1" />
              <Picker.Item label="US" value="key2" />
              <Picker.Item label="UK" value="key3" />
              <Picker.Item label="UAE" value="key4" />
            </Picker>
          </Form>    

          <Button block style={{ borderRadius: 10, backgroundColor: '#F8CF52', margin: hp('2%'),marginTop: hp('8%') }} placeholder="Password">
                  <Text>
                  NEXT
                </Text>
                </Button>              
                </View>
            </View>

        </ImageBackground>
        </Container>
    )

}

export default LanguageScreen;