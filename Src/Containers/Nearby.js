import React, { useState } from 'react';
import { View, FlatList } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right,  Text,Badge,Icon } from 'native-base'

import LinearGradient from 'react-native-linear-gradient';
import styles from './Styles/mainStyles'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
const notiArray = [
    {
        id: 1,
        Title: 'Gul Ahmad new cloth',
        Desc: 'Gull Ahmad new cloth arrives.  ahan',
        Time: '3:43'

    },
    {
        id: 2,
        Title: '1 Ahmad new cloth',
        Desc: 'Gull Ahmad new cloth arrives.  ahan',
        Time: '2:43'

    },
    {
        id: 3,
        Title: '2 Ahmad new cloth',
        Desc: 'Gull Ahmad new cloth arrives.  ahan',
        Time: '1:43'

    },
    {
        id: 1,
        Title: 'Gul Ahmad new cloth',
        Desc: 'Gull Ahmad new cloth arrives.  ahan',
        Time: '3:43'

    },
    {
        id: 2,
        Title: '1 Ahmad new cloth',
        Desc: 'Gull Ahmad new cloth arrives.  ahan',
        Time: '2:43'

    },
    {
        id: 3,
        Title: '2 Ahmad new cloth',
        Desc: 'Gull Ahmad new cloth arrives.  ahan',
        Time: '1:43'

    },
    {
        id: 1,
        Title: 'Gul Ahmad new cloth',
        Desc: 'Gull Ahmad new cloth arrives.  ahan',
        Time: '3:43'

    },
    {
        id: 2,
        Title: '1 Ahmad new cloth',
        Desc: 'Gull Ahmad new cloth arrives.  ahan',
        Time: '2:43'

    },
    {
        id: 3,
        Title: '2 Ahmad new cloth',
        Desc: 'Gull Ahmad new cloth arrives.  ahan',
        Time: '1:43'

    },
    {
        id: 1,
        Title: 'Gul Ahmad new cloth',
        Desc: 'Gull Ahmad new cloth arrives.  ahan',
        Time: '3:43'

    },
    {
        id: 2,
        Title: '1 Ahmad new cloth',
        Desc: 'Gull Ahmad new cloth arrives.  ahan',
        Time: '2:43'

    },
    {
        id: 3,
        Title: '2 Ahmad new cloth',
        Desc: 'Gull Ahmad new cloth arrives.  ahan',
        Time: '1:43'

    }
]






const Notification = () => {

    const [noti, setnoti] = useState(notiArray)

    const notiRender = (item) => {


    }

    return (
        <Container style={{flex:1}}>
            <View style={{flex:1,
        borderRadius:hp('4%'),
        backgroundColor:'rgba(0,0,0,0)'}}>
                <LinearGradient colors={['#38b6ff', '#1a7eb8', '#0c6ea6']} style={styles.linearGradient}>
                    <Header style={styles.header}>
                        <Left>
                            {/* <Icon name="chevron-back" style={styles.backIcon}></Icon> */}
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
            <View style={{flex:3 }}>
                <List>
                    <FlatList
                        data={noti}
                        renderItem={({ item }) => (
                            <ListItem >
                                <Body>
                                    <Text>{item.Title}</Text>
                                    <Text note>{item.Desc}</Text>
                                </Body>
                                <Right>
                                    <Text note>{item.Time} pm</Text>
                                </Right>
                            </ListItem>
                        )}
                        //Setting the number of column
                        numColumns={1}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </List>
            </View>
        </Container>
    )
}

export default Notification;