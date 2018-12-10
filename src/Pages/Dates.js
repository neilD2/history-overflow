import React, { Component } from 'react';
import { SimpleMap } from '../Maps/Map';

class Dates extends Component {
    render() {
        return (
            <div className="container-fluid">
            <p>
                Use this search feature to search wikipedia on all historical events, figures and information.

            </p>
                <div>
                    <SimpleMap/>
                </div>
            </div>
        );
    }
}

export default Dates;
