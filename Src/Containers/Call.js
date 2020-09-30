import React, { useEffect } from 'react'
import { ImageBackground } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Call = (props) => {
    const { navigation } = props
    return (

        <ImageBackground
            source={require('../Images/Call.png')} style={{ flex: 1, width: wp('100%'), height: hp('100%') }} >
        </ImageBackground>

    )
}

export default Call;

