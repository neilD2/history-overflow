import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Assets/scss/_config.scss";
import "./Assets/scss/default.scss";
import "./Assets/scss/socialMediaShare.scss"
import "./Assets/scss/modal.scss"
import Favicon from 'react-favicon';
import myImage from './Assets/img/logo.png';
import index from "./redux/index";
import { Provider } from "react-redux";
import store from "./redux/store/index";

ReactDOM.render(
  <div>
    <Favicon url={myImage} />
    <Provider store={store}>
      <App />
    </Provider>
  </div>
  , document.getElementById("root"));
