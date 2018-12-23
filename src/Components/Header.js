import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>

                <div className="title">History Overflow</div>

                <img className="logo"></img>

                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Podcasts">Podcasts</Link>
                        </li>
                        <li>
                            <Link to="/Films">Films</Link>
                        </li>
                        <li>
                            <Link to="/TV">TV</Link>
                        </li>
                        <li>
                            <Link to="/Books">Books</Link>
                        </li>
                        <li>
                            <Link to="/Dates">Event Map</Link>
                    </li>

                    </ul>


                </nav>

            </header>


        );
    }
}

export default Header;
