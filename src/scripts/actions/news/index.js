import {
    FETCH_NEWS_LIST,
    PRE_LOADING
} from '../actionTypes';

import { createAction } from 'redux-actions';
import  Api from "../../apis/Api";

const thumbnail = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1509615043&di=7b09c9e9a8ac7f71b13aaa4906b3aeb1&src=http://api.cocoachina.com/uploads/20150814/1439535490262863.jpg';
const preLoadingAction=createAction(PRE_LOADING);
/*export  const fetchNewsList = createAction(FETCH_NEWS_LIST);
    fetchNewsList(
       fetch('https://api.github.com//search/repositories?q=java'+'&sort=stars')
           .then(response => response.json()))*/

export var fetchNewsList = createAction(FETCH_NEWS_LIST, () => {
    return fetch('https://api.github.com/search/repositories?q=java&sort=stars')
        .then(response => response.json());

});