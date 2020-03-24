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
import TV from "./Pages/TV";
import Books from "./Pages/Books";
import Dates from "./Pages/Dates";
import SocialMediaShare from "./Components/SocialMediaShare"
import axios from 'axios'

axios.defaults.baseURL = "https://historyoverflow.firebaseio.com"

class App extends Component {
	render() {
		const headerStyles = {
			main: {
				display:'flex',
				flexDirection:'column',
				alignItems: 'center',
				height: '100vh',
			}
		}

		return (
			<Router onUpdate={() => window.scrollTo(0, 0)}>
				<div className="App">
					<meta name="viewport" content="width=device-width"/>
					<Header style={headerStyles.main}/>
<SocialMediaShare/>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/Podcasts' component={Podcasts} />
					<Route exact path='/Films' component={Films} />
					<Route exact path='/TV' component={TV} />
					<Route exact path='/Books' component={Books} />
					<Route exact path='/Dates' component={Dates} />

					<div data-selector="one"/>

					<Footer/>

				</div>

    </Router>
		);
	}
}

export default App;
