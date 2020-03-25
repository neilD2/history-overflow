import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Assets/scss/_config.scss";
import "./Assets/scss/default.scss";
import "./Assets/scss/socialMediaShare.scss"
import "./Assets/scss/modal.scss"
import Favicon from 'react-favicon';
import myImage from './Assets/img/logo.png';

ReactDOM.render(
  <div>
      <Favicon url={myImage} />
      <App />
  </div>
  , document.getElementById("root"));
