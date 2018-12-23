import React, { Component } from 'react'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps"
import file from '../static/world-50m-simplified.json';

const wrapperStyles = {
    fontFamily: "Roboto, sans-serif",
    width: "100%",
    maxWidth: 980,
    marginTop: "20px",
    marginLeft: "-78px",
    backgroundColor: "#003e99"
}

const tagStyles = {
    display: "inline-block",
    background: "#ECEFF1",
    padding: "0.25rem 0.5rem",
    margin: "0 0.125rem 0.125rem 0",
}

export class WorldMapEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            show: false,
            title: '',
            summary: '',
            link: ''
        };
    }

    render() {


            return (
                <div id="event-map">
                    <div style={wrapperStyles}>

                        <ComposableMap
                            projectionConfig={{scale: 205}}
                            width={980}
                            height={551}
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                        >
                            <ZoomableGroup>
                                <Geographies geography={file} disableOptimization>
                                    {(geos, proj) =>
                                        geos.map((geo, i) => {


                                                let isSelected;

                                                if (this.props.timelineValue == 1) {
                                                    console.log('1her>>>')
                                                    if(geo.properties.CONTINENT === 'North America') {


                                                     isSelected = true;
                                                     }
                                                }

                                            if (this.props.timelineValue == 2) {
                                                console.log('1her>>>')
                                                if(geo.properties.CONTINENT === 'North America') {
                                                    console.log('2')
                                                    isSelected = true;
                                                }
                                            }

                                                return (
                                                    <Geography
                                                        key={geo.properties.ISO_A3 + i}
                                                        cacheId={geo.properties.ISO_A3 + i}
                                                        geography={geo}
                                                        projection={proj}
                                                        // onClick={this.handleClick}
                                                        style={{
                                                            default: {
                                                                fill: isSelected ? "#FF5722" : "#ECEFF1",
                                                                stroke: "#607D8B",
                                                                strokeWidth: 0.75,
                                                                outline: "none",
                                                            },
                                                            hover: {
                                                                fill: isSelected ? "#FF5722" : "#ECEFF1",
                                                                stroke: "#607D8B",
                                                                strokeWidth: 0.75,
                                                                outline: "none",
                                                            },
                                                            pressed: {
                                                                fill: isSelected ? "#FF5722" : "#ECEFF1",
                                                                stroke: "#607D8B",
                                                                strokeWidth: 0.75,
                                                               // outline: "none",
                                                            },
                                                        }}
                                                    />
                                                )
                                            }
                                        )}
                                </Geographies>
                            </ZoomableGroup>
                        </ComposableMap>
                    </div>
                    <div id="selected-countries">
                        {
                            this.state.selected.length > 0
                                ?
                                this.state.selected.map(item =>
                                    <div key={item} style={tagStyles}>
                                        { item }
                                    </div>
                                )
                                :
                                <div style={{padding: "0.25rem 0.5rem"}}>
                                    <h2>Events</h2>
                                    <h2>Late Pleistocene</h2>
                                    <div id="event-text">
                                        <div id="event-text-key">
                                        <div id="event-key"></div>
                                        <h2>North America</h2>
                                        </div>
                                        <p>According to George Carr Frison, Bison occidentalis and Bison antiquus, an extinct subspecies of the smaller present-day bison, survived the Late Pleistocene period, between about 12 and 11 ka ago. Plains and Rocky Mountain First Nations depended on these bison as their major food source.[6][Notes 1] Earlier kills of camels, horses, and muskoxen found at Wally's beach were dated to 13.1–13.3 ka B.P.</p>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            )
        }

}

export default WorldMapEvent;