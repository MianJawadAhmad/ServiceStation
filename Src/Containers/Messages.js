
import React, { useState } from 'react'
import {FlatList } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base'
import styles from './Styles/mainStyles'
const summer = [
    {
        id: 1,
        name: 'Gul Ahmad',
        img: require('../Images/men/cl.png'),
        msg: 'dont'
    },
    {
        id: 1,
        name: 'Asla',
        img: require('../Images/men/cl.png'),
        msg: 'wow'
    },
    {
        id: 1,
        name: 'jans',
        img: require('../Images/men/cl.png'),
        msg: 'Where are you'
    },
    {
        id: 1,
        name: 'Aslam',
        img: require('../Images/men/cl.png'),
        msg: 'I love you'
    },
    {
        id: 1,
        name: 'Grace',
        img: require('../Images/men/cl.png'),
        msg: 'how are you '
    },
    {
        id: 1,
        name: 'Gul Ahmad',
        img: require('../Images/men/cl.png'),
        msg: 'yes'
    }, {
        id: 1,
        name: 'Alkaram',
        img: require('../Images/men/cl.png'),
        msg: 'no'
    },
    {
        id: 1,
        name: 'Grace',
        img: require('../Images/men/cl.png'),
        msg: '350'
    }
]

const Messages = (props) => {

    const [Msg, setMsg] = useState(summer)
    const { navigation } = props;


    return (
        <Container style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <Header style={{backgroundColor:'white'}}>
                <Left style={{flex:1}}>
                <Icon name='search'/>
                </Left>
                <Body style={{flex:1}}>
                    <Text>Inbox</Text>
                </Body>
                <Right style={{flex:1}}>
                    <Icon name='search'/>
                </Right>

            </Header>

            <Content contentContainerStyle={{ margin: 5, backgroundColor: '#F5F5F5' }} >

                <FlatList
                    data={Msg}
                    renderItem={({ item }) => (
                        <List>
                            <ListItem avatar onPress={()=>navigation.navigate('messageview')}>
                                <Left>
                                    <Thumbnail source={item.img} />
                                </Left>
                                <Body>
                                    <Text>{item.name}</Text>
                                    <Text note>{item.msg}</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                        </List>
                    )}
                    //Setting the number of column
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Content>
        </Container>
    )
}

export default Messages;