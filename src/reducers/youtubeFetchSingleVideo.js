export default (state = {}, action) => {
  switch (action.type) {
    case "VIDEO_SINGLE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
