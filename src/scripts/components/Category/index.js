import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from '../../actions/category';

import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
//import { Col, Row, Grid } from "react-native-easy-grid";
import { common, filterCard } from '../../../styles';

class Category extends Component {
    static navigationOptions = {
        tabBarLabel: '品类',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-list-box" size={24} color={tintColor} />
        )
    };
    componentDidMount() {
        this.props.fetchCategoryList();
    }
    renderCategoryRow(categryRow, index) {
        return (
            <Row key={index}>
                {
                    (categryRow || []).map((category, index) => {
                        return (
                            <Col key={index} style={[filterCard.card, !category.name && common.whiteBg]}>
                                <View style={filterCard.info}>
                                    <View style={filterCard.title}>
                                        <Text style={filterCard.titleText} numberOfLines={1}>{category.name}</Text>
                                    </View>
                                    <View style={filterCard.meta}>
                                        <Text style={filterCard.metaText} numberOfLines={1}>{category.tags}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Image style={filterCard.thumbnail} source={{uri: category.thumbnail}}></Image>
                                </View>
                            </Col>
                        )
                    })
                }
            </Row>
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
    render() {
        return (
            <View style={common.containerFixHeight}>
                <ScrollView>
{/*
                    { this.renderCategories() }
*/}
                </ScrollView>
            </View>
        );
    }
}

export default connect(
    state => ({
        categries: state.categries
    }),
    dispatch => bindActionCreators(categoryActions, dispatch)
)(Category);
