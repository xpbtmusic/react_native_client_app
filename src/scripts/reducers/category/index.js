import {
    FETCH_CATEGORY_LIST
} from '../../actions/actionTypes';

import { handleActions } from 'redux-actions';

function formatCategories(data = [], colNum = 2) {
    let formatedData = [],
        lastIndex = 0,
        groupLen = Math.ceil(data.length / colNum);
    for(let i = 0; i < groupLen; i++) {
        formatedData[i] = data.slice(i * colNum, (i + 1) * colNum).map((item = {}) => {
            item.tags = (item.items || []).map((child) => child.name).join(' ');
            return item;
        });
    }
    if((lastIndex = formatedData[groupLen - 1].length) < colNum) {
        for(let i = colNum; i > lastIndex; i--) {
            formatedData[groupLen - 1].push({});
        }
    }
    return formatedData;
}

export default handleActions({
    [FETCH_CATEGORY_LIST]: {
        next(state, action) {
            return { ret: true, data: formatCategories(action.payload) };
        },
        throw(state, action) {
            return { ret: false, statusText: action.payload, data: [] };
        }
    }
}, { ret: true, statusText: '', data: [] });
