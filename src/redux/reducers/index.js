import { ADD_FAVOURITES } from "../constants/action-types";

const initialState = {
  favourites: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_FAVOURITES) {
    return Object.assign({}, state, {
      favourites: state.favourites.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
