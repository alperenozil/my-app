import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0,
        tags:[]
    };
    styles={
        fontSize:'24px'
    };
    renderTags(){
        if(this.state.tags.length==0) return <p>There are no tags!</p>;
        return (
        <ul>
            {this.state.tags.map(item=><li key={item}>{item}</li>)}
        </ul>
        );
    }
    render() { 
        return (
        <React.Fragment>
            <span style={this.styles}className="badge badge-primary m-2">{this.state.count}</span>
            <button className="btn btn-secondary btn-sm">Button Alperen</button>
            {this.renderTags()}
        </React.Fragment>);
    }
}
 
export default Counter;