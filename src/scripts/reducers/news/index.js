import {
    FETCH_NEWS_LIST,
    PRE_LOADING,
} from '../../actions/actionTypes';
import logger from '../../apis/logger'

import { handleActions } from 'redux-actions';

export default handleActions({


    START_REQUEST:{
        next(state, action) {
            return {refreshing: true}
        }
    },
    FINISH_REQUEST:{
        next(state, action) {
            return {refreshing: false}
        }
    },
    [FETCH_NEWS_LIST]: {
        next(state, action) {
            logger.info("hand action "+action.payload)
            return { ret: true, data: action.payload };
        },
        throw(state, action) {
            return { ret: false, statusText: action.payload, data: [] };
        }
    },
    RESET_REQUEST:{
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
