'use strict';

import AppDispatcher from '../dispatcher/app.dispatcher';
import CounterConstants from '../constants/counter.constants.js';
import Events from 'events';

const EventEmitter = Events.EventEmitter;

var number = 0;

class CounterStore extends EventEmitter {

    emitChange(){
        this.emit('change');
    }

    // Get total number until
    get(){
        return number;
    }

    // Add n to number
    add(n){
        number += n;
        return number;
    }

    // Remove n from this number
    remove(n){
        number -= n;
        return number;
    }

    addChangeListener(callback){
        this.on('change', callback)
    }

    remoceChangeListener(callback){
        this.removeListener('change', callback);
    }

}

let counterStore = new CounterStore();

AppDispatcher.register(function(payload) {

    let action = payload.action;

    switch (action.actionType) {
        case CounterConstants.ADD:
            counterStore.add(1);
            break;

        case CounterConstants.REMOVE:
            counterStore.remove(1);
            break;
    }

    counterStore.emitChange();
});

export default counterStore;
