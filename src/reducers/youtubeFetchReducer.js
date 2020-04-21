export default (state = {} , action) => {
    switch(action.type) {
        case 'VIDEO_DATA':
            return {...state, ...action.payload};
        default:
            return state;
    }
}