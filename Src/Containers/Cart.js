import React, { useState, useContext } from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native'
import { Container, Text, Header, Left, Right, Body, Icon, Badge, Card, Button, Content, Thumbnail, List, ListItem } from 'native-base'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient';

import styles from './Styles/mainStyles'
const summer = [
  {
      id: 1,
      title: 'Gul Ahmad',
      img: require('../Images/men/menn1.png'),
      price: 350
  },
  {
      id: 1,
      title: 'Alkaram',
      img: require('../Images/men/menn2.png'),
      price: 350
  },
  {
      id: 1,
      title: 'Grace',
      img: require('../Images/men/menn7.png'),
      price: 350
  },
  {
      id: 1,
      title: 'Local',
      img: require('../Images/men/menn4.png'),
      price: 350
  },
  {
      id: 1,
      title: 'Grace',
      img: require('../Images/men/menn5.png'),
      price: 350
  },
  {
      id: 1,
      title: 'Gul Ahmad',
      img: require('../Images/men/menn6.png'),
      price: 350
  }, {
      id: 1,
      title: 'Alkaram',
      img: require('../Images/men/menn7.png'),
      price: 350
  },
  {
      id: 1,
      title: 'Grace',
      img: require('../Images/men/menn2.png'),
      price: 350
  }
]

const Cart = (props) => {

  const [Cloths, setCloths] = useState(summer)
  const { navigation } = props;

  return (
    <Container>
            <View style={{        flex:0.3,
        borderRadius:hp('4%'),
        backgroundColor:'rgba(0,0,0,0)'}}>
        <LinearGradient colors={['#38b6ff', '#1a7eb8', '#0c6ea6']} style={styles.linearGradient}>
          <Header style={styles.header}>
            <Left>
              <Icon name="chevron-back" style={styles.backIcon} onPress={() => navigation.navigate('Home')}></Icon>
            </Left>
            <Body>
              <Text style={styles.headerName}>Home</Text>
            </Body>
            <Right>
              {/* <Badge success style={styles.badge}>
                <Text >2</Text>
              </Badge> */}
              {/* <Icon name="cart-outline" style={styles.cartIcon} onPress={() => navigation.navigate('Cart')}>
              </Icon> */}
            </Right>
          </Header>
        </LinearGradient>
      </View>
      <Content style={{flex:1}}>
      <List>
      <FlatList
                    data={Cloths}
                    renderItem={({ item }) => (
            <ListItem avatar>
                        <Left>
                          <Thumbnail source={item.img} />
                        </Left>
                        <Body>
                          <Text>{item.title}</Text>
                          <Text note>Rs: {item.price}</Text>
                        </Body>
                        <Right style={{ flexDirection: 'row' }}>
                          <Button>
                            <Text>+</Text>
                          </Button>
                          <Text>0</Text>
                          <Button>
                            <Text>-</Text>
                          </Button>
                        </Right>
                      </ListItem>
                    )}
                    //Setting the number of column
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                />

          
        </List>
        <Button style={{margin:10,alignItems:'center',justifyContent:'center'}}
          onPress={()=>this.props.navigation.navigate('PaymentScreen')}>
            <Text >Next</Text>
          </Button>

      </Content>
    </Container>
  )

}

export default Cart;