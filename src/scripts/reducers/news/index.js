import {
    FETCH_NEWS_LIST,
    PRE_LOADING,
} from '../../actions/actionTypes';

import { handleActions } from 'redux-actions';

export default handleActions({
    [FETCH_NEWS_LIST]: {
        next(state, action) {
            console.log("数据"+JSON.stringify(action.payload))
            return { ret: true, data: action.payload.items };
        },
        throw(state, action) {
            return { ret: false, statusText: action.payload, data: [] };
        }
    },

    START_REQUEST:{
        next(state, action) {
            return {refreshing: true}
        }
    },
    RESET_REQUEST:{
        next(state, action) {
            return {refreshing: false}
        }
    },
    FINISH_REQUEST:{
        next(state, action) {
            return {refreshing: false}
        }
    },
    ENABLE_REQUEST:{
        next(state, action) {
            return {refreshing: true}
        }
    },
    DISABLE_REQUEST:{
        next(state, action) {
            return {refreshing: false}
        }
    }
}, { ret: true, statusText: '', data: [] });
