import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import youtubeFetchReducer from './youtubeFetchReducer'
import idSelectedVideoReducer from './idSelectedVideoReducer';
import youtubeFetchSingleVideo from './youtubeFetchSingleVideo';
import AuthState from './authState';
import userList from './userList';

export default combineReducers({
    authState: AuthState,
    form: formReducer,
    YoutubeList: youtubeFetchReducer ,
    idSelectedVideo:idSelectedVideoReducer,
    detailedVideo: youtubeFetchSingleVideo,
    userList: userList
});