'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter.component';
import CounterStore from '../stores/counter.store';
import BackgroundConstant from '../constants/background-state.constants';

class Background extends React.Component {
    constructor(){
        super();

        this.state = {
            state: BackgroundConstant.STATE1
        }
    }

    componentDidMount(){
        CounterStore.addChangeListener(this.onChange.bind(this));
    }

    onChange(){
        let next = this.state.state.next;

        this.setState({
            state: BackgroundConstant[next]
        })
    }

    getClass(){
        return `background  ${this.state.state.className}`;
    }

    render() {
        return (
            <div className={this.state.state.className}>
                <Counter />
            </div>
        );
    }
}

export default Background;
