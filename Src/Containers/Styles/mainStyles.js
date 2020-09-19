import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        flex:3,
        alignItems:'center',
        justifyContent:'center',
        margin:20
    },
    headerView:{
        flex:1,
        borderRadius:hp('4%'),
        backgroundColor:'rgba(0,0,0,0)'
    },
    header:{
        backgroundColor:'rgba(0,0,0,0)',
        borderBottomColor:'rgba(0,0,0,0)'
    },
    backIcon:{
        fontSize: hp('4%'), 
        color: 'white'
    },
    cartIcon:{
        fontSize: hp('4%'), 
        color: 'white',
    },
    badge:{ 
        position: "absolute",
        bottom:30,
    },
    headerName:{
        fontSize: hp('3%'), 
        color: 'white'
    },
    homeTouchableopacity:{
        width:wp('90%'),
        height:hp('20%'),
        borderRadius:hp('3%'),
        alignItems:'flex-end',
        justifyContent:'center',
        marginTop:hp('2%')
    },
    text:{
        marginRight:hp('2%'),
        fontSize:hp('3%'),
        fontWeight:'bold',
        color:'black',
        marginBottom: hp('2%')
    },
    homeImage:{
        width:wp('90%'),
        height:hp('20%'),
        alignItems:'flex-end',
        justifyContent:'flex-end',
    },
    linearGradient: {
        flex: 1,
        borderRadius:hp('4%')
      },
//CothsType Screen 
    typeHeaderView:{
        flex:1.3,
        borderRadius:hp('4%'),
        backgroundColor:'#3dadff'
        
    },
    Carousel:{
        width:wp('90%'),
        height:hp('18%'),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:hp('3%'),
        marginLeft:hp('6%')
    },
    carouselImage:{
        width:wp('90%'),
        height:hp('22%'),
        borderRadius:hp('2%'),
    },
//clothsList
MainContainer: {
    justifyContent: 'center',
    flex: 4,
    backgroundColor:'#f1f1f1',
    marginLeft:hp('2%'),
    marginRight:hp('2%')
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('10%'),
    width:wp('30%'),
    margin:5,
    borderRadius: 10,
  },

  //Detail screen

  DetailMainContainer: {
    justifyContent: 'center',
    flex: 4,
    backgroundColor:'white',
  },
 //meaurment
 headerItem:{
    flex:1
  },
  leftIconHeader:{
    width:wp('10%'),
    height:hp('4%')
  },
  leftIconHeaderImage:{
    width:hp('2%'),
    height: hp('3%')
  },
  rightIconHeader:{
    width:wp('10%'),
    height:hp('5%'),
    alignItems:'center',
    justifyContent:'center'
  },
  rightButtonText:{
    fontSize:hp('2%'),
    color:'black'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginLeft:20,
    borderBottomWidth:2,
    borderBottomColor:'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default styles;