import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from '../../actions/category';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
//import { Col, Row, Grid } from "react-native-easy-grid";
import { common, filterCard } from '../../../styles';
import {TabNavigator} from "react-navigation";
const classTabbarNavigator = TabNavigator({
        Tab1: { screen: Tab1 },
        Tab2: { screen: Tab2 }
    }
    , {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: false,
        lazy:true,
        initialRouteName:'Tab1',
        order:(['Tab1','Tab2']),
        backBehavior:'none',
    });
class ClassTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delayShowScrollTableView:false,
        };
    }
    static navigationOptions = {
        tabBarLabel: '品类',
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-list-box" size={24} color={tintColor}/>
        )
    };

    componentDidMount() {
        this.props.fetchCategoryList();
        this.timer = setTimeout(()=> {
            this.setState({
                delayShowScrollTableView: true
            });
        }, 500);
    }

    renderCategoryRow(categryRow, index) {
        return (
            categoryActions
        );
    }

    renderCategories() {
        return (
            <Grid style={filterCard.wrapper}>
                {
                    this.props.categries.data.map((item, index) => {
                        return this.renderCategoryRow(item, index);
                    })
                }
            </Grid>
        );
    }
    onCellSelected(id) {
        this.props.navigation.navigate('NewsDetail', { id: id });
    }
    render() {
        if(this.state.delayShowScrollTableView) {


            return <ScrollableTabView
                style={{backgroundColor: '#eff1f8'}}
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar/>}
                tabBarBackgroundColor='#273460'
                tabBarActiveTextColor='#1dd2cc'
                tabBarInactiveTextColor='#fff'
                tabBarTextStyle={{fontSize: 13}}
                tabBarUnderlineStyle={{backgroundColor: '#1dd2cc', height: 1}}>
                <Tab1 tabLabel='标题1' onPress={this.onCellSelected.bind(this)} style={{backgroundColor: 'red'}}/>
                <Tab2 tabLabel='标题2' onPress={this.onCellSelected.bind(this)}/>
            </ScrollableTabView>
        }else{
            return <View/>
        }

    }
}
export default connect(
    state => ({
        categries: state.categries
    }),
    dispatch => bindActionCreators(categoryActions, dispatch)
)(ClassTab);
