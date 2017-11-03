import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    Image,
    FlatList,
    StatusBar,
    TouchableHighlight
} from 'react-native';
import { common, topicCard } from '../../../styles';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as newsActions from '../../actions/news';

class Home extends Component {
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" size={24} color={tintColor} />
        )
    };
    componentDidMount() {
        this.props.fetchNewsList();
    }
    _onPressItem = (id) => {
        this.props.navigation.navigate('NewsDetail', { id: id });
    };
    _keyExtractor = (item, index) => item.id;
    _renderItem = ({item}) => (
        <View style={topicCard.card}>
            <Image style={topicCard.cover} source={{uri: item.thumbnail}}></Image>
            <TouchableHighlight
                style={topicCard.title}
                onPress={this._onPressItem.bind(this, item.id)}>
                <Text numberOfLines={1} style={topicCard.titleText}>{item.title}</Text>
            </TouchableHighlight>
            <View style={topicCard.desc}>
                <Text numberOfLines={2} style={topicCard.descText}>{item.desc}</Text>
            </View>
        </View>
    );
    render() {
        return (
            <View style={[common.containerFixHeight, common.springWoodBg]}>
                <FlatList
                    data={this.props.news.data}
                    refreshing={false}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                  />
            </View>
        );
    }
}

export default connect(
    state => ({
        news: state.news
    }),
    dispatch => bindActionCreators(newsActions, dispatch)
)(Home);
