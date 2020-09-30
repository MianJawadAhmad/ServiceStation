import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import styles from '../Styles/mainStyles'

export default class CarouselExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width: 0, height: 0 },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: wp('90%'), height: hp('20%') } });
  }

  render() {
    return (
      <View style={{ flex: 1,
      width:wp('90%'),
      height:hp('20%'),
      alignItems:'center',
      justifyContent:'center',
      margin:hp('2%'), 
      borderRadius:hp('2%'),
      borderWidth:1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={2000}
          style={{width: wp('90%'), height: hp('22%'),borderRadius:hp('2%')}}
          autoplay
          bullets
        >
              <Image 
              style={styles.carouselImage}
              source={require('../../Images/2.png')} resizeMode='cover'/>
              <Image 
              style={styles.carouselImage} 
              source={require('../../Images/3.png')} resizeMode='cover'/>
              <Image  resizeMode='cover'
              style={styles.carouselImage} 
              source={require('../../Images/1.png')}/>
          
        </Carousel>
      </View>
    );
  }
}