import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    StatusBar
} from 'react-native';
import { common } from '../../../styles';

export default class UserCenter extends Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-contact" size={24} color={tintColor} />
        )
    };
    render() {
        return (
            <View style={common.container}>
                <Text>个人中心</Text>
            </View>
        );
    }
}
