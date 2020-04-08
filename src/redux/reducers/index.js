import { ADD_FAVOURITES } from "../constants/action-types";
import { REMOVE_FAVOURITES } from "../constants/action-types";

const initialState = {
  favourites: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_FAVOURITES) {
    return Object.assign({}, state, {
      favourites: state.favourites.concat(action.payload)
    });
  }
  if (action.type === REMOVE_FAVOURITES) {
    return {favourites: state.favourites.filter(element => element !== action.payload)};
  }
  return state;
}

export default rootReducer;
