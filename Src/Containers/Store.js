
import React, { useState } from 'react'
import { ScrollView, KeyboardAvoidingView, TouchableOpacity, Image, FlatList, View } from 'react-native'
import { Header, Left, Body, Right, Container, Content, Text, Button, Icon, Card, Item, Input } from 'native-base'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import styles from './Styles/mainStyles'
const summer = [
  {
    id: 1,
    title: 'Gul Ahmad',
    img: require('../Images/men/cl.png'),
    price: 350
  },
  {
    id: 1,
    title: 'Alkaram',
    img: require('../Images/men/cl.png'),
    price: 350
  },
  {
    id: 1,
    title: 'Grace',
    img: require('../Images/men/cl.png'),
    price: 350
  },
  {
    id: 1,
    title: 'Local',
    img: require('../Images/men/cl.png'),
    price: 350
  },
  {
    id: 1,
    title: 'Grace',
    img: require('../Images/men/cl.png'),
    price: 350
  },
  {
    id: 1,
    title: 'Gul Ahmad',
    img: require('../Images/men/cl.png'),
    price: 350
  }, {
    id: 1,
    title: 'Alkaram',
    img: require('../Images/men/cl.png'),
    price: 350
  },
  {
    id: 1,
    title: 'Grace',
    img: require('../Images/men/cl.png'),
    price: 350
  }
]

const Store = (props) => {

  const [Cloths, setCloths] = useState(summer)
  const { navigation } = props;


  return (
    <Container style={{ flex: 1,backgroundColor: '#F5F5F5' }}>

      <Content contentContainerStyle={{ margin: 5,backgroundColor: '#F5F5F5' }} >
        <View style={{ width: wp('100%'), backgroundColor: '#F5F5F5' }}>
          <View style={{ margin: hp('2%') }}>
            <Text style={{ fontWeight: 'bold' }}>4 min away</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row', margin: hp('2%') }}>
              <Image source={require('../Images/bag.png')} resizeMode='contain' style={{ margin: hp('2%') }} />
              <View style={{ margin: hp('2%') }}>
                <Text style={{ fontWeight: 'bold', width: wp('50%') }}>Al Barka Moving Ltd. </Text>
                <Text style={{ width: wp('50%') }}>www.example.com</Text>
              </View>
              <Icon name='menu' style={{ margin: hp('2%') }} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', margin: hp('1%') }}>
              <Icon name='location' style={{ margin: hp('2%') }} />
              <View style={{ margin: hp('2%') }}>
                <Text style={{ fontWeight: 'bold', width: wp('50%') }}>Street 7 81 Al Kuywayt Al </Text>
                <Text style={{ width: wp('50%'), color: 'black' }}>Farwaniyah Kuwait</Text>
              </View>
              <Icon name='menu' style={{ margin: hp('2%') }} />

            </View>
          </View>
          <View style={{ width: wp('100%'), marginTop: hp('1%'),marginBottom: hp('2%'), alignItems: 'center' }}>
            <Item style={{ backgroundColor: 'white', flexDirection: 'row', width: wp('90%'), borderRadius: 10, shadowOpacity: 0.2, shadowOffset: { width: 1, height: 1 }, elevation: 1, }}>

              <Input placeholder="Search" />
            </Item>
          </View>
        </View>

        <FlatList
          data={Cloths}
          renderItem={({ item }) => (
            <Card style={{ flex: 1, flexDirection: 'column',height: hp('25%'), margin: 50,  borderRadius: 10, alignItems: 'center', backgroundColor: 'white' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail', { item: item })}
                style={{ flex: 1, height: '100%', width: '100%', margin: 5, alignItems: 'center', }}>
                  <View style={{width: '100%'}}>
                  <Image style={{   justifyContent: 'center',alignItems: 'center',height: hp('15%'),width: '100%'}} source={item.img} resizeMode='cover' />
                  </View>
                  <View style={{width: '100%',marginLeft:20,marginTop:10}}>
                  <Text style={{ alignContent: 'center', fontSize: 25 }}>{item.title}</Text>
                <Text style={{ alignContent: 'center', fontSize: 15 }}>Rs {item.price}</Text> 
                    </View>

              </TouchableOpacity>
            </Card>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </Content>
    </Container>
  )
}

export default Store;