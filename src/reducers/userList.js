import _ from 'lodash';

export default (state = {} , action) => {
    switch(action.type) {
        case 'USER_DATA':
            return {...state, ..._.mapKeys(action.payload,'ID')}
        case 'VIDEO_DELETE':
            return _.omit(state, action.payload)
        default:
            return state;
    }
}