import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 10,
            lng: 0
        },
        zoom: 0
    };

    mapOptions() {
        return {
            mapTypeControl: true,
            overviewMapControl: true,
            minZoomOverride: true,
            minZoom: 2,
            styles: [{
                featureType: 'landscape',
                stylers: [{ visibility: 'simplified'}, { color: '#A9A9A9' }, { weight: 0.5 } ]
            },
            {
                featureType: 'administrative',
                stylers: [{ visibility: 'on'}, { hue: '#ff0000' }, { weight: 0.4 }, { color: '#ffffff' } ]
            },
            {
                featureType: 'water',
                stylers: [{ color: '#00a9ca' } ]
            }
            ]
        }
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB0ybtQtX4CcyL3DkXyo0brl-b5EfLLXKI' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={this.mapOptions()}

                >
 {/*                   <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}
                    />*/}
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
