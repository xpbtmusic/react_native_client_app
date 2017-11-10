const url='https://api.github.com';
const QUERY_STR = '&sort=stars';
import {getApi} from './HttpRequest'

var Api={};
var token;
Api.login = function(userName, password, callback) {
    var body = {
        username: userName,
        password: password,
    };
}
//1ff3198852d8f77e8fc6288c411a5d61ad033665

Api.getHomeData=function (keyWords,callback) {

    sendHttpRequest('/search/repositories?q='+keyWords+'&sort=stars', 'GET', null, callback, callback);

}
export function getHomeInfos ({q='',sort=''}) {
    return getApi('/search/repositories', {q,sort})
}
function sendHttpRequest(relativeUrl, method, body, success, error) {
    body = (!body ? body : JSON.stringify(body));
    var headers = {};
    if (token) {
        headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization':token
        }
    }else{
        headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    fetch(url + relativeUrl, {
        method: method,
        headers: headers,
        body: body,
        timeout: 30 * 1000
    })
        .then((response) => response.json())
        .then((responseData) => success(responseData))
        .catch((err) => error(err));
}

function sendHttpRequestWithUploadImage(relativeUrl, method, body, success, error) {
    let formData = new FormData();
    for (var key in body){
        if (key == 'photos') {
            for (var i = 0; i < body[key].length; i++) {
                let file = {uri: body[key][i], type: 'application/octet-stream', name: 'image.jpg'};
                formData.append(key, file);
            }
        }else{
            formData.append(key, body[key]);
        }
    }
    // console.log(formData)
    var headers = {
        'Content-Type': 'multipart/form-data;charset=utf-8',
        'authorization':token
    };
    // console.log(headers)
    fetch(url + relativeUrl, {
        method: method,
        headers: headers,
        body: formData,
        timeout: 30 * 1000
    })
        .then((response) => response.json())
        .then((responseData) => success(responseData))
        .catch((err) => error(err));
}
