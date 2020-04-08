import store from "../redux/store/index";
import { addFavourites } from "../redux/actions/index";
import { removeFavourites } from "../redux/actions/index";

window.store = store;
window.addFavourites = addFavourites;
window.removeFavourites = removeFavourites;
