export default (state = [] , action) => {
    switch(action.type) {
        case 'USER_DATA':
            return {...state, ...action.payload};
        default:
            return state;
    }
}