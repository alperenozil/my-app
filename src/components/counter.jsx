import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0
    };
    render() { 
        return (
        <React.Fragment>
            <span>{this.state.count}</span>
            <button>Button Alperen</button>
            <ul>selam</ul>
        </React.Fragment>);
    }
}
 
export default Counter;