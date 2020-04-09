import { ADD_FAVOURITES, REMOVE_FAVOURITES, REMOVE_FAVOURITE_ITEMS, ADD_FAVOURITE_ITEMS } from '../constants/action-types'

const initialState = {
  favourites: [],
  favouriteItems: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_FAVOURITES) {
    return Object.assign({}, state, {
      favourites: state.favourites.concat(action.payload)
    });
  }
  if (action.type === REMOVE_FAVOURITES) {
    return {...state,favourites: state.favourites.filter(element => element !== action.payload)};
  }
  if (action.type === ADD_FAVOURITE_ITEMS) {
    return Object.assign({}, state, {
      favouriteItems: state.favouriteItems.concat(action.payload)
    });
  }
  if (action.type === REMOVE_FAVOURITE_ITEMS) {
    return {...state,favouriteItems: state.favouriteItems.filter(element => element.movieTitle !== action.payload.movieTitle)};
  }
  return state;
}

export default rootReducer;
