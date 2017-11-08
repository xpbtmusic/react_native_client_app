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
    }
}, { ret: true, statusText: '', data: [] });
