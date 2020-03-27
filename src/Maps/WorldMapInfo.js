import React, { Component } from 'react'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps"
import file from '../static/world-50m-simplified.json';
import { Modal } from './Modal';
import axios from 'axios';

const wrapperStyles = {
    fontFamily: "Roboto, sans-serif",
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
    backgroundColor: "lightblue"
}

const tagStyles = {
    display: "inline-block",
    background: "#ECEFF1",
    padding: "0.25rem 0.5rem",
    margin: "0 0.125rem 0.125rem 0",
}

export class WorldMap extends Component {
    constructor() {
        super();
        this.state = {
            selected: [],
            show: false,
            title: '',
            summary: '',
            link: ''
        };
        this.handleClick = this.handleClick.bind(this)
    }

    showModal = (geoName) => {

        axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/History%20of%20${geoName}`)
            .then(({ data }) => {
                this.setState({
                    title: data.title,
                    summary: data.extract,
                    link: data.content_urls.desktop.page
                })
            });

        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    handleClick(geo) {
        this.showModal(geo.properties.NAME)
        const isSelected = this.state.selected.indexOf(geo.properties.ISO_A3) !== -1
        this.setState({
            selected: isSelected
                ? this.state.selected.reduce((acc, cur) => {
                    if (geo.properties.ISO_A3 !== cur) acc.push(cur)
                    return acc
                }, [])
                : this.state.selected.concat([geo.properties.ISO_A3])
        })
    }
    render() {
        return (
            <div>
            <h1>Brief Country History</h1>
                <h2>Click on a county to see a brief history and Wiki link</h2>
            <div style={wrapperStyles}>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.summary}</p>
                    <a href={this.state.link} target="blank">Wiki link</a>
                </Modal>
                <ComposableMap
                    projectionConfig={{ scale: 205 }}
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

                                        const isSelected = this.state.selected.indexOf(geo.properties.ISO_A3) !== -1

                                        return (
                                            <Geography
                                                key={geo.properties.ISO_A3 + i}
                                                cacheId={geo.properties.ISO_A3 + i}
                                                geography={geo}
                                                projection={proj}
                                                onClick={this.handleClick}
                                                style={{
                                                    default: {
                                                        fill: isSelected ? "#FF5722" : "#ECEFF1",
                                                        stroke: "#607D8B",
                                                        strokeWidth: 0.75,
                                                        outline: "none",
                                                    },
                                                    hover: {
                                                        fill: isSelected ? "#E64A19" : "#607D8B",
                                                        stroke: "#607D8B",
                                                        strokeWidth: 0.75,
                                                        outline: "none",
                                                    },
                                                    pressed: {
                                                        fill: "#FF5722",
                                                        stroke: "#607D8B",
                                                        strokeWidth: 0.75,
                                                        outline: "none",
                                                    },
                                                }}
                                            />
                                        )
                                    }
                                )}
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
                <div>
                    {
                        this.state.selected.length > 0
                            ?
                            this.state.selected.map(item =>
                                <div key={item} style={tagStyles}>
                                    { item }
                                </div>
                            )
                            :
                            <div style={{ padding: "0.25rem 0.5rem" }}>
                                { "No countries selected." }
                            </div>
                    }
                </div>
            </div>
         </div>
        )
    }
}

export default WorldMap
