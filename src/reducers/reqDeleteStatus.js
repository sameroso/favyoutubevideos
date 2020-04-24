export default (state = null , action) => {
    switch(action.type) {
        case 'REQ_STATUS_SUCESS':
            return true;
        case 'REQ_STATUS_FAILED':
            return false;
        default:
            return state;
    }
}