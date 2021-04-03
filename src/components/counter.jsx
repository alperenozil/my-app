import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0,
        tags:['tag1', 'tag2', 'tag3']
    };
    styles={
        fontSize:'24px'
    };
    render() { 
        return (
        <React.Fragment>
            <span style={this.styles}className="badge badge-primary m-2">{this.state.count}</span>
            <button className="btn btn-secondary btn-sm">Button Alperen</button>
            <ul>
                {this.state.tags.map(tag=><li>alperen</li>)}
            </ul>
        </React.Fragment>);
    }
}
 
export default Counter;