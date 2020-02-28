import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './styles'

export default class Details extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.title}>Details Screen</Text>
                <Button style={styles.marginTop} title="View Top Tabs" onPress={()=> this.props.navigation.navigate('Top Tabs')}/>
                <Button style={styles.marginTop} title="View Bottom Tabs" onPress={()=> this.props.navigation.navigate('Bottom Tabs') }/>
            </View>
        )
    }
}
