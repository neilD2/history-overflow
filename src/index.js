import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Assets/scss/_config.scss";
import "./Assets/scss/default.scss";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
