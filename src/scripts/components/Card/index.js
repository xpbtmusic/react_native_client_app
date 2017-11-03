import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    StatusBar
} from 'react-native';
import { common } from '../../../styles';

export default class Card extends Component {
    static navigationOptions = {
        tabBarLabel: '购物车',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-cart" size={24} color={tintColor} />
        )
    };
    render() {
        return (
            <View style={common.container}>
                <Text>购物车</Text>
            </View>
        );
    }
}
