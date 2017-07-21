'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter.component';
import CounterStore from '../stores/counter.store';

class Background extends React.Component {
    componentDidMount(){        
        CounterStore.addChangeListener(this.onChange);
    }

    onChange(){
        console.log('Change');
    }

    render() {
        return (
            <div>
                <Counter />
            </div>
        );
    }
}

export default Background;
