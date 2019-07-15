import { SET_CURRENT_USER } from "../actionTypes";

const initialState = {
  isAuthenticated: false,
  user: {} // all the users info when logged in
}

export default (state = initialState, action ) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        // turn empty object into false or if ther are keys, true
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user
      }
    default:
      return state;
  }
};