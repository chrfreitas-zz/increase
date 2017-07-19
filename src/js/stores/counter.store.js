'use strict';

import AppDispatcher from '../dispatcher/app.dispatcher';
import CounterConstants from '../constants/counter.constants.js';
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

AppDispatcher.register(function(payload) {

    let action = payload.action;

    switch (action.actionType) {
        case CounterConstants.ADD:
            console.log('Add');
            break;

        case CounterConstants.REMOVE:
            console.log('Remove');
            break;
    }

    counterStore.emitChange();
});

export default counterStore;
