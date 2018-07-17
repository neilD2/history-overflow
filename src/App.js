import React, { Component } from "react";

import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";


import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";
import Podcasts from "./Pages/Podcasts";
import Films from "./Pages/Films";
import Books from "./Pages/Books";
import Dates from "./Pages/Dates";
import SocialMediaShare from "./Components/SocialMediaShare"



class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header/>
<SocialMediaShare/>

						<Route path='/history-overflow/' component={Homepage}/>
					<Route path='/history-overflow/Podcasts' component={Podcasts} />
					<Route path='/history-overflow/Films' component={Films} />
					<Route path='/history-overflow/Books' component={Books} />
					<Route path='/history-overflow/Dates' component={Dates} />
						<Route path='*' component={Dates} />




					<div data-selector="one"/>

					<Footer/>

				</div>

    </Router>
		);
	}
}

export default App;
