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
        CounterStore.addChangeListener(this.get.bind(this));
    }

    render(){
        return (
            <div className="counter">
                <div className="counter__display">{this.state.number}</div>
                <div className="counter__actions">
                    <button className="counter__btn counter__btn-rotate" onClick={this.add}>+</button>
                    <button className="counter__btn counter__btn-shake" onClick={this.remove}>-</button>
                </div>
            </div>
        );
    }
}

export default Counter;
