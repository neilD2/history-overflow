import React, { Component } from "react";

import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";


import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Podcasts, ContactUs, Homepage} from "./Pages/StaticPages"
import FilmsAndTv from "./Pages/FilmsAndTv";
import Books from "./Pages/Books";
import Maps from "./Pages/Maps";
import News from "./Pages/News"
import MyLists from './Pages/MyLists'
import SocialMediaShare from "./Components/SocialMediaShare"
import axios from 'axios'
import ScrollToTopButton from './Components/ScrollToTopButton'

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
					<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
					<Header style={headerStyles.main}/>
{/*<SocialMediaShare/>*/}
					<Route exact path='/' component={Homepage} />
					<Route exact path='/News' component={News} />
					<Route exact path='/Podcasts' component={Podcasts} />
					<Route exact path="/Films" render={props => <FilmsAndTv mediaType="movie" titleName="title"  {...props} />} />
					<Route exact path="/TV" render={props => <FilmsAndTv mediaType="TV" titleName="name" {...props} />} />
					<Route exact path='/Books' component={Books} />
					<Route exact path='/Maps' component={Maps} />
					<Route exact path='/ContactUs' component={ContactUs} />
					<Route exact path='/MyLists' component={MyLists} />
					<ScrollToTopButton/>
					{/*<div data-selector="one"/>*/}

					<Footer/>

				</div>

    </Router>
		);
	}
}

export default App;
