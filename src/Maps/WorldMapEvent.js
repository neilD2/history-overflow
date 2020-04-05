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
            link: '',
            fillColor: ''
    };
    }

    render() {
        let fillColor;
        let divStyle;

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
                                                    if(geo.properties.CONTINENT === 'North America') {
                                                     isSelected = true;
                                                        fillColor = "#FF5722";
                                                    }
                                                }

                                            if (this.props.timelineValue == 2) {
                                                if(geo.properties.NAME === 'Azerbaijan' ||
                                                    geo.properties.NAME === 'Iran' ||
                                                    geo.properties.NAME === 'Kazakhstan' ||
                                                    geo.properties.NAME === 'Russia' ||
                                                    geo.properties.NAME === 'Turkmenistan'
                                                ) {
                                                    isSelected = true;
                                                    fillColor = "#133337";
                                                }
                                                if(geo.properties.CONTINENT === 'North America') {
                                                    isSelected = true;
                                                    fillColor = "#FF5722";
                                                }
                                            }

                                            divStyle = fillColor;

                                           // this.setState({fillColor:fillColor})

                                                return (
                                                    <Geography
                                                        key={geo.properties.ISO_A3 + i}
                                                        cacheId={geo.properties.ISO_A3 + i}
                                                        geography={geo}
                                                        projection={proj}
                                                        // onClick={this.handleClick}
                                                        style={{
                                                            default: {
                                                                fill: isSelected ? fillColor : "#ECEFF1",
                                                                stroke: "#607D8B",
                                                                strokeWidth: 0.75,
                                                                outline: "none",
                                                            },
                                                            hover: {
                                                                fill: isSelected ? fillColor : "#ECEFF1",
                                                                stroke: "#607D8B",
                                                                strokeWidth: 0.75,
                                                                outline: "none",
                                                            },
                                                            pressed: {
                                                                fill: isSelected ? fillColor : "#ECEFF1",
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


{console.log('fillColor', divStyle)}
                        {(this.props.timelineValue == 1) &&

                        <div style={{padding: "0.25rem 0.5rem"}}>
                                    <h2>Events</h2>
                                    <h2>Late Pleistocene</h2>
                                    <div id="event-text">
                                        <p>Much of the Late Pleistocene age was dominated by glaciations, such as the Wisconsin glaciation in North America and the Weichselian glaciation and Würm glaciation in Eurasia). Many megafauna became extinct during this age, a trend that continued into the Holocene. The Late Pleistocene contains the Upper Paleolithic stage of human development, including the out-of-Africa migration and dispersal of anatomically modern humans and the extinction of the last remaining archaic human species.</p>
                                        <div id="event-text-key">
                                            <div id="event-key" style={{backgroundColor:divStyle}}></div>
                                            <h2>North America</h2>
                                        </div>
                                        <p>According to George Carr Frison, Bison occidentalis and Bison antiquus, an extinct subspecies of the smaller present-day bison, survived the Late Pleistocene period, between about 12 and 11 ka ago. Plains and Rocky Mountain First Nations depended on these bison as their major food source.[6][Notes 1] Earlier kills of camels, horses, and muskoxen found at Wally's beach were dated to 13.1–13.3 ka B.P.</p>
                                    </div>
                                </div>
                        }

                        {(this.props.timelineValue == 2) &&

                        <div style={{padding: "0.25rem 0.5rem"}}>
                            <h2>new</h2>
                            <h2>Late Pleistocene</h2>
                            <div id="event-text">
                                <p>Much of the Late Pleistocene age was dominated by glaciations, such as the Wisconsin glaciation in North America and the Weichselian glaciation and Würm glaciation in Eurasia). Many megafauna became extinct during this age, a trend that continued into the Holocene. The Late Pleistocene contains the Upper Paleolithic stage of human development, including the out-of-Africa migration and dispersal of anatomically modern humans and the extinction of the last remaining archaic human species.</p>
                                <div id="event-text-key">
                                    <div id="event-key" style={{backgroundColor:divStyle}}></div>
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
