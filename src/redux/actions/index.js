import { ADD_FAVOURITES } from "../constants/action-types";
import { REMOVE_FAVOURITES } from "../constants/action-types";

export function addFavourites(payload) {
  return { type: ADD_FAVOURITES, payload };
}

export function removeFavourites(payload) {
  return { type: REMOVE_FAVOURITES, payload };
}
