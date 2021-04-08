import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    state = {  
        counters:[{id:1,value:2},{id:2,value:0},{id:3,value:0},{id:4,value:0}]
    }
    handleDelete = counterId => {
        console.log('delete clicked ',counterId);
    }
    render() { 
        return ( 
            <div>
                {this.state.counters.map(counter=>(
                <Counter 
                    key={counter.id} onDelete={this.handleDelete} value={counter.value} >
                </Counter>))}
            </div>
         );
    }
}
 
export default Counters;