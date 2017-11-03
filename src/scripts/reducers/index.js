import { combineReducers } from 'redux';

import news from './news';
import categries from './category';

export default function getReducers(navReducer) {
    return combineReducers({
        news,
        categries,
        nav: navReducer
    });
}
