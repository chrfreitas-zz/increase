import React from 'react';
import ReactDOM from 'react-dom';
import CounterActions from '../actions/counter.actions';
import CounterStore from '../stores/counter.store';

class Counter extends React.Component {
    add() {
        CounterActions.add();
    }

    remove() {
        CounterActions.remove();
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.add);
        CounterStore.addChangeListener(this.remove);
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
