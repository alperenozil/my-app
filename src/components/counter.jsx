import React, { Component } from 'react';

class Counter extends Component {
    state={
        value:this.props.counter.value,
        tags:['first','second','third','fourth']
    };
    styles={
        fontSize:'24px'
    };
    /* constructor(){
        super();
        this.handleIncrement=this.handleIncrement.bind(this);
    } */
    handleIncrement=()=>{
        this.setState({ value:this.state.value+1 })
        console.log('increment clicked',this.state.value);
    }
    renderTags(){
        if(this.state.tags.length===0) return <p>There are no tags!</p>;
        return (
        <ul>
            {this.state.tags.map(item=><li key={item}>{item}</li>)}
        </ul>
        );
    }
    render() { 
        return (
        <div>
            <span style={this.styles}className="badge badge-primary m-2">{this.state.value}</span>
            <button 
                onClick={this.handleIncrement} 
                className="btn btn-secondary btn-sm">Increment
            </button>
            <button 
                onClick={()=>this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">Delete
            </button>
            {this.state.tags.length === 0 && 'Please create a new tag'}
            {this.renderTags()} 
        </div>);
    }
}
export default Counter;