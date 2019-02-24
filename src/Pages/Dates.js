import React, { Component } from 'react';
import { WorldMap } from '../Maps/WorldMapInfo';
import { WorldMapEvent } from '../Maps/WorldMapEvent';
import Timeline from '../Maps/Timeline'

class Dates extends Component {
    render() {
        return (
            <div className="container-fluid">
            <p>
                Use this search feature to search wikipedia on all historical events, figures and information.

            </p>
                <div>
                   <Timeline/>
                </div>
                <div>
                    <WorldMap/>
                </div>
            </div>
        );
    }
}

export default Dates;
