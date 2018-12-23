import React from 'react';
import WorldMapEvent from './WorldMapEvent';

export default class Timeline extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: 1};

        // This binding is necessary to make `this` work in the callback
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({value: event.target.value});
    }

    render(){
        return(
            <div>
        <h1>Events timeline</h1>
        <h2>Drag the pointer across the timeline to see the history map change</h2>
            <div id="slidecontainer">
                <input type="range"
                       min="1"
                       max="10"
                       className="slider"
                       id="myRange"
                       value={this.state.value}
                       onChange={(event)=>this.handleInputChange(event)}
                />
                <br/>
               <WorldMapEvent timelineValue={this.state.value}/>
            </div>
            </div>
        )
    }
}
