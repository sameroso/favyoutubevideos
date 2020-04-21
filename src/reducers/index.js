import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import youtubeFetchReducer from './youtubeFetchReducer'
import idSelectedVideoReducer from './idSelectedVideoReducer';
import youtubeFetchSingleVideo from './youtubeFetchSingleVideo';

export default combineReducers({
    form: formReducer,
    YoutubeList: youtubeFetchReducer ,
    idSelectedVideo:idSelectedVideoReducer,
    detailedVideo: youtubeFetchSingleVideo
});