export default (state = "" , action) => {
    switch(action.type) {
        case 'VIDEO_CURRENT_DELETE':
            return action.payload;
        default:
            return state;
    }
}