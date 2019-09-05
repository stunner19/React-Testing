import tv4 from 'tv4';
import stateSchema from 'redux/stateSchema';

const stateValidator = ({dispatch, getState}) => (next) => (action) => {

    // getState returns the current state of the appliation.
    // pass the action to the next middleware.
    next(action);

    if(!tv4.validate(getState(),stateSchema)){
        console.warn("Invalid State Schema detected!!");
    }
};

export default stateValidator;