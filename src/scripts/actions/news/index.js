import {
    FETCH_NEWS_LIST
} from '../actionTypes';

import { createAction } from 'redux-actions';

const thumbnail = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1509615043&di=7b09c9e9a8ac7f71b13aaa4906b3aeb1&src=http://api.cocoachina.com/uploads/20150814/1439535490262863.jpg';

export var fetchNewsList = createAction(FETCH_NEWS_LIST, () => {
    return [1,2,3,4,5,6,7,8,9,10].map(item => {
        return {
            id: item,
            title: `[${item}]夏季又要到，做好防脱准备很重要`,
            thumbnail: thumbnail,
            desc: '室内干燥，室外气温高，春夏季对于需要带状的上班族来说就是压力山大。'
        }
    });
});
