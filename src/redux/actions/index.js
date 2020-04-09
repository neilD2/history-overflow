import { ADD_FAVOURITES, REMOVE_FAVOURITES, REMOVE_FAVOURITE_ITEMS, ADD_FAVOURITE_ITEMS } from '../constants/action-types'

export function addFavourites(payload) {
  return { type: ADD_FAVOURITES, payload };
}

export function removeFavourites(payload) {
  return { type: REMOVE_FAVOURITES, payload };
}

export function addFavouriteItems(payload) {
  return { type: ADD_FAVOURITE_ITEMS, payload };
}

export function removeFavouriteItems(payload) {
  return { type: REMOVE_FAVOURITE_ITEMS, payload };
}
