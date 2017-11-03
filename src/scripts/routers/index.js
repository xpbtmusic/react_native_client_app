import {
    TabNavigator,
    StackNavigator,
    addNavigationHelpers
} from "react-navigation";

import Home from '../components/Home';
import Category from '../components/Category';
import Card from '../components/Card';
import UserCenter from '../components/UserCenter';
import NewsDetail from '../components/NewsDetail';

const TabbarNavigator = TabNavigator({
    Home: { screen: Home },
    Category: { screen: Category },
    Card: { screen: Card },
    UserCenter: { screen: UserCenter }
}, {
    initialRouteName: 'Home'
});

const AppNavigator = StackNavigator({
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
