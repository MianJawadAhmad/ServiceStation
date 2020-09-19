import React, { useState, useContext } from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native'
import { Container, Text, Header,Left,Right,Body,Icon,Badge,Card } from 'native-base'
import styles from './Styles/mainStyles'

import LinearGradient from 'react-native-linear-gradient';
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

const clothsList = (props) => {

    const [Cloths, setCloths] = useState(summer)
    const {navigation} = props;

    return (
        <Container style={{flex:1,backgroundColor:'#f1f1f1'}}>
            <View style={styles.headerView}>
            <LinearGradient colors={['#38b6ff', '#1a7eb8', '#0c6ea6']} style={styles.linearGradient}>
                <Header style={styles.header}>
                    <Left>
                        <Icon name="chevron-back" style={styles.backIcon} onPress={()=> navigation.goBack()}></Icon>
                    </Left>
                    <Body>
                        <Text style={styles.headerName}>Home</Text>
                    </Body>
                    <Right>
                        <Badge success style={styles.badge}>
                            <Text >2</Text>
                        </Badge>
                        <Icon name="cart-outline" style={styles.cartIcon}>
                        </Icon>
                    </Right>
                </Header>
                </LinearGradient>
            </View>
            <View style={styles.MainContainer}>
                <FlatList
                    data={Cloths}
                    renderItem={({ item }) => (
                        <Card  style={{ flex: 1, flexDirection: 'column', margin: 50, justifyContent: 'center', borderRadius: 10, alignItems: 'center', backgroundColor: 'white' }}>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate('Detail',{item: item})}
                        style={{ flex: 1,height:'100%',width:'100%', margin: 5, justifyContent: 'center',  alignItems: 'center', }}>


                            <Image style={styles.imageThumbnail} source={item.img} />
                            <Text style={{ alignContent: 'center', fontSize: 25 }}>{item.title}</Text>
                            <Text style={{ alignContent: 'center', fontSize: 15 }}>Rs {item.price}</Text>

                        </TouchableOpacity>
                        </Card>
                    )}
                    //Setting the number of column
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

        </Container>
    )

}

export default clothsList;