import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0,
        imageUrl:'https://picsum.photos/200'
    };
    render() { 
        return (
        <React.Fragment>
            <img src={this.state.imageUrl} alt=""></img>
            <span>{this.state.count}</span>
            <button>Button Alperen</button>
            <ul>selam</ul>
        </React.Fragment>);
    }
}
 
export default Counter;