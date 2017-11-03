import {
    FETCH_NEWS_LIST
} from '../../actions/actionTypes';

import { handleActions } from 'redux-actions';

export default handleActions({
    [FETCH_NEWS_LIST]: {
        next(state, action) {
            return { ret: true, data: action.payload };
        },
        throw(state, action) {
            return { ret: false, statusText: action.payload, data: [] };
        }
    }
}, { ret: true, statusText: '', data: [] });
