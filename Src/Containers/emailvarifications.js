import React, { useState, useContext } from 'react';
import { ImageBackground } from 'react-native';
import { Container} from 'native-base';
import styles from './Styles/mainStyles'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const emailvarifications = (props) => {
  const { navigation } = props

  return (
    <Container style={{ flex: 1 }}>
      <ImageBackground
        source={require('../Images/emailvarifications.png')} style={{ flex: 1, width: wp('100%'), height: hp('100%') }}>



      </ImageBackground>
    </Container>
  );
};



export default emailvarifications;