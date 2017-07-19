import AppDispatcher from '../dispatcher/app.dispatcher';
import CounterConstants from '../constants/counter.constants';

let CounterActions = {

    add: function(){
        AppDispatcher.viewAction({
            actionType: CounterConstants.ADD
        });
    },

    remove: function(){
        AppDispatcher.viewAction({
            actionType: CounterConstants.REMOVE
        });
    }

}

export default CounterActions;
