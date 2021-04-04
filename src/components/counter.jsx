import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0,
        tags:['first','second','third','fourth']
    };
    styles={
        fontSize:'24px'
    };
    handleIncrement(){
        console.log('increment clicked');
    }
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
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Button Alperen</button>
            {this.state.tags.length === 0 && 'Please create a new tag'}
            {this.renderTags()} 
        </React.Fragment>);
    }
}
 
export default Counter;