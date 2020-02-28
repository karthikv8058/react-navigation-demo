import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './styles'


export default class Feed extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.title}>Feeds</Text>
                <Button title="Go to Feed Item" onPress={()=> this.props.navigation.navigate('Details')} />
            </View>
        )
    }
}
