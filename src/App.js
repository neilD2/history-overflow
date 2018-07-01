import React, { Component } from "react";

import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";


//import "./Assets/css/default.min.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
 import Homepage from "./Pages/Homepage";
// import Podcasts from "./Pages/Podcasts";
// import Films from "./Pages/Films";
// import Books from "./Pages/Books";
// import Dates from "./Pages/Dates";




class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">

					<Header/>

					<Route exact path='/' component={Homepage} />
					{/*<Route exact path='/Podcasts' component={Podcasts} />*/}
					{/*<Route exact path='/Films' component={Films} />*/}
					{/*<Route exact path='/Books' component={Books} />*/}
					{/*<Route exact path='/Dates' component={Dates} />*/}

					<div data-selector="one"/>

					<Footer/>

				</div>
			</Router>
		);
	}
}

export default App;
