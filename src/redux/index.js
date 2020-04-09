import store from "../redux/store/index";
import { addFavourites, removeFavourites, addFavouriteItems, removeFavouriteItems } from "../redux/actions/index";

window.store = store;
window.addFavourites = addFavourites;
window.removeFavourites = removeFavourites;
window.addFavouriteItems = addFavouriteItems;
window.removeFavouriteItems = removeFavouriteItems;
