import { ADD_FAVOURITES } from "../constants/action-types";

export function addFavourites(payload) {
  return { type: ADD_FAVOURITES, payload };
}
