export default (state = "" , action) => {
    switch(action.type) {
        case 'CLICKED':
            return action.payload;
        default:
            return state;
    }
}