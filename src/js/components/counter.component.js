'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import CounterActions from '../actions/counter.actions';
import CounterStore from '../stores/counter.store';

class Counter extends React.Component {
    constructor(props){
        super(props);

        this.state = {number: 0};
    }

    get(){
        debugger;
        this.setState({
            number: CounterStore.get()
        });
    }

    add() {
        CounterActions.add();
    }

    remove() {
        CounterActions.remove();
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.add);
        CounterStore.addChangeListener(this.remove);
        CounterStore.addChangeListener(this.get.bind(this));
    }

    render(){
        return (
            <div>
                <span>{this.state.number}</span>
                <button onClick={this.add}>Add</button>
                <button onClick={this.remove}>Remove</button>
            </div>
        );
    }
}

export default Counter;
