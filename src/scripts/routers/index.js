import {
    TabNavigator,
    StackNavigator,
    addNavigationHelpers,
    TabBarTop
} from "react-navigation";

import Home from '../components/Home';
import Category from '../components/Category';
import Tab1 from '../components/Category/Tab1';
import Tab2 from '../components/Category/Tab2';
import ClassTab from '../components/Category/ClassTab';

import Card from '../components/Card';
import UserCenter from '../components/UserCenter';
import NewsDetail from '../components/NewsDetail';
import LoginScreen from "../components/Login/LoginScreen";
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
const TabbarNavigator = TabNavigator({
    Home: { screen: Home },
    Category: { screen: ClassTab },
    Card: { screen: Card },
    UserCenter: { screen: UserCenter },

}, {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled:true,
    tabBarOptions:{
        showIcon:true,
        indicatorStyle:{
            height:0
        },
        tabStyle: { // 设置底部图标的样式
            margin:0,
            padding:0,
        },
    }

},
    );

const AppNavigator = StackNavigator({
    Login: {
        screen: LoginScreen
    },
    TabBar: {
        screen: TabbarNavigator,
        navigationOptions: {
            header: null
        }
    },
    NewsDetail: {
        path: 'news/:id',
        screen: NewsDetail
    }
});

export {
    AppNavigator
};
