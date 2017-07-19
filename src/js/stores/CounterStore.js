'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import CounterConstants from '../constants/CounterConstants.js';
import Events from 'events';

const EventEmitter = Events.EventEmitter;

class CounterStore extends EventEmitter {

    emitChange(){
        this.emit('change');
    }

    addChangeListener(callback){
        this.on('change', callback)
    }

    remoceChangeListener(callback){
        this.removeListener('change', callback);
    }

}

let counterStore = new CounterStore();

AppDispatcher.register((payload){

    let action = payload.action;

    switch (action.actionType) {
        case CounterStore.ADD:
            console.log('Add');
            break;

        case CounterStore.REMOVE:
            console.log('Remove');
            break;
    }

    counterStore.emitChange();

});

exports default counterStore;
