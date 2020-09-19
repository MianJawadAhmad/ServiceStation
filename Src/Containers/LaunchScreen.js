import React, { useEffect} from 'react'
import {View, Image,ImageBackground} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const LaunchScreen = (props) =>{
    const { navigation } = props
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('SignInScreen')
          },2000)
    })
    return(

        <ImageBackground  
            source={require('../Images/ss.png')} style={{flex: 1,width:wp('100%'),height:hp('100%')}} >
        </ImageBackground>

    )
}

export default LaunchScreen;
