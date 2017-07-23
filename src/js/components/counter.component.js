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
            <div className="counter">
                <span className="counter_number">{this.state.number}</span>
                <button className="counter__btn" onClick={this.add}>Add</button>
                <button className="counter__btn" onClick={this.remove}>Remove</button>
            </div>
        );
    }
}

export default Counter;
