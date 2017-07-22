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
        CounterStore.addChangeListener(this.onChange);
    }

    onChange(){
        
    }

    render() {
        return (
            <div className={this.state.state}>
                <Counter />
            </div>
        );
    }
}

export default Background;
