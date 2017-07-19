'use strict';

import Flux from 'flux';
const SOURCE = 'VIEW_ACTION';

let AppDispatcher = new Flux.Dispatcher();

AppDispatcher.viewAction = function(action = {}){
    this.dispatcher({
        source: SOURCE,
        action,
    });
}

export default AppDispatcher;
