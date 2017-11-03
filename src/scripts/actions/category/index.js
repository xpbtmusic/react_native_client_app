import {
    FETCH_CATEGORY_LIST
} from '../actionTypes';

import { createAction } from 'redux-actions';

const thumbnail = 'https://facebook.github.io/react/img/logo_og.png';

export var fetchCategoryList = createAction(FETCH_CATEGORY_LIST, () => {
    return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(item => {
        return {
            id: item,
            name: `彩妆${item}`,
            thumbnail: thumbnail,
            items: [1,2,3].map((child) => {
                return {
                    id: item + '' + child,
                    name: `子彩妆${child}`,
                    thumbnail: thumbnail,
                }
            })
        }
    });
});
