import React from 'react';
import ReactDOM from 'react-dom';
import CounterActions from '../actions/counter.actions';

class Counter extends React.Component {
    add() {
        CounterActions.add();
    }

    remove() {
        CounterActions.remove();
    }

    render(){
        return (
            <div>
                <span></span>
                <button onClick={this.add}>Add</button>
                <button onClick={this.remove}>Remove</button>
            </div>
        );
    }
}

export default Counter;
