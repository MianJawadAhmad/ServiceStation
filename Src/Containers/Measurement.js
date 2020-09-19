
import React,{useState} from 'react'
import { ScrollView, KeyboardAvoidingView,TouchableOpacity,Image,FlatList,View,Slider } from 'react-native'
import {Header,Left,Body,Right,Container,Content, Text,Button} from 'native-base'

import styles from './Styles/mainStyles'
sliderArrayXS= [
    {size:10,name:'Neck'},
    {size:20,name:'Chest'},
    {size:30,name:'hips'},
    {size:40,name:'Shoulder'},
    {size:50,name:'Neck'},
  ]
  sliderArrayS=[
    {size:15,name:'Neck'},
    {size:25,name:'Chest'},
    {size:35,name:'hips'},
    {size:45,name:'Shoulder'},
    {size:55,name:'Neck'},
  ]
  sliderArrayM=[
    {size:20,name:'Neck'},
    {size:30,name:'Chest'},
    {size:40,name:'hips'},
    {size:50,name:'Shoulder'},
    {size:60,name:'Neck'},
  ]
  sliderArrayL=[
    {size:30,name:'Neck'},
    {size:40,name:'Chest'},
    {size:50,name:'hips'},
    {size:60,name:'Shoulder'},
    {size:70,name:'Neck'},
  ]
  sliderArrayXL=[
    {size:80,name:'Neck'},
    {size:90,name:'Chest'},
    {size:100,name:'hips'},
    {size:20,name:'Shoulder'},
    {size:50,name:'Neck'},
  ]

   button = [
    {name:'XS'},
    {name:'S'},
    {name:'M'},
    {name:'L'},
    {name:'XL'},
  ]
  array= [
    {name:'XS'},
    {name:'S'},
    {name:'M'},
    {name:'L'},
    {name:'XL'},
  ]
  slider= [
    {size:80,name:'Neck'},
    {size:90,name:'Chest'},
    {size:100,name:'hips'},
    {size:20,name:'Shoulder'},
    {size:50,name:'Neck'},
  ]

const Measurement = () =>{

   
    const [Array, setArray] = useState(array)
    const [Sslider, setSslider] = useState(slider)
     const [SliderArrayXS, setSliderArrayXS] = useState(sliderArrayXS)
     const [SliderArrayS, setSliderArrayS] = useState(sliderArrayS)
     const [SliderArrayM, setSliderArrayM] = useState(sliderArrayM)
     const [SliderArrayL, setSliderArrayL] = useState(sliderArrayL)
     const [SliderArrayXL, setSliderArrayXL] = useState(sliderArrayXL)
   
     defaultSizeValue = (element) =>{
       if(element.name == 'XS'){
        setSslider( SliderArrayXS)
       }else if(element.name == 'S'){
        setSslider( SliderArrayS)
     }else if(element.name == 'M'){
      setSslider( SliderArrayM)
   }else if(element.name == 'L'){
    setSslider( SliderArrayL)
   }else if(element.name == 'XL'){
    setSslider( SliderArrayXL)
   }
   
     }
   
     defaultSize = () => {
       return Array.map(element => {
         return (
           <Button style={{borderRadius:120,width:60,height:60}} onPress={() => {this.defaultSizeValue(element)}}>
             <Text style={{flex:1,textAlign:'center'}}>{element.name}</Text>
             </Button>
         );
       });
     };
   
     slider = () => {
       return Sslider.map(element => {
         return (
           <View>
             <Text style={{fontSize:20,margin:15,fontWeight:'bold'}}>{element.name}</Text>
           <View style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center'}}>
           <Slider
             style={{ width: 300 }}
             step={1}
             minimumValue={18}
             maximumValue={71}
             value={element.size}
              onValueChange={(val) => {element.size = val}}
             //onSlidingComplete={ val => this.getVal(element)}
           />
           <Text style={styles.welcome}>
             {element.size + ' in'}
           </Text> 
         </View>  
         </View>
         );
       });
     };



    return(
  <Container style={{flex:1}}>

        <Content scrollEnabled={false} contentContainerStyle={{margin:5}} >
          <Text style={{fontSize:20,margin:15,fontWeight:'bold'}}>Select a 
          pre-set size and then edit as per your requirment</Text>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
          {this.defaultSize()}
          </View>
          <View style={styles.container}>
            

              <Text style={{fontSize:20,margin:15,fontWeight:'bold'}}>Save Measurement</Text>
              {this.slider()}
          </View>
          <Button style={{margin:10,alignItems:'center',justifyContent:'center'}}
          onPress={()=>this.props.navigation.navigate('PaymentScreen')}>
            <Text >Next</Text>
          </Button>
        </Content>
      </Container>
    )
}

export default Measurement;