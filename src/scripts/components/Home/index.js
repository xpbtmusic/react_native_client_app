import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

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
import Logger from "../../apis/logger";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiperShow:false,
        };
    }
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" size={24} color={tintColor} />
        )
    };
    componentDidMount() {
        this.props.fetchNewsList();
        setTimeout(()=>{
            this.setState({swiperShow:true});
        },0)
    }
    _onPressItem = (id) => {
        this.props.navigation.navigate('NewsDetail', { id: id });
    };
    _header = () => {
        if(this.state.swiperShow){
            return <Swiper height={150} autoplay={true}><Image
                source={{uri:'http://img3.redocn.com/tupian/20150430/mantenghuawenmodianshiliangbeijing_3924704.jpg'}} style={{height:150}}/><Image
                source={{uri:'http://img3.redocn.com/tupian/20150430/mantenghuawenmodianshiliangbeijing_3924704.jpg'}} style={{height:150}}/><Image
                source={{uri:'http://img3.redocn.com/tupian/20150430/mantenghuawenmodianshiliangbeijing_3924704.jpg'}} style={{height:150}} /></Swiper>
        }else {
            return <View style={{height:150}}></View>;
        }

    }
    _keyExtractor = (item, index) => item.id;
    _renderItem = ({item}) => (
        <View style={topicCard.card}>
            <Image style={topicCard.cover} source={{uri: item.owner.avatar_url}}></Image>
            <TouchableHighlight
                style={topicCard.title}
                onPress={this._onPressItem.bind(this, item.id)}>
                <Text numberOfLines={1} style={topicCard.titleText}>{item.full_name}</Text>
            </TouchableHighlight>
            <View style={topicCard.desc}>
                <Text numberOfLines={2} style={topicCard.descText}>{item.description}</Text>
            </View>
        </View>
    );
    render() {
        Logger.info("----"+JSON.stringify(this.props.news.data))
        return (
            <View style={[common.containerFixHeight, common.springWoodBg]}>
                <FlatList
                    data={this.props.news.data}
                    ListHeaderComponent={this._header}
                    refreshing={false}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    removeClippedSubviews={false}
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
