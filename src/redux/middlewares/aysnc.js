// function returns a function which in turn returns another function.
// next passes the action to the next middleware.
// dispatch passes to the action to all the middlewares from the beginnng.

const asyncMiddleware = ({dispatch}) => (next) => (action) => {

    // check if the action contains a promise.
    if(!action.payload || !action.payload.then){
        return next(action);
    }

    action.payload.then(response => {
        const newAction = {...action, payload : response};
        dispatch(newAction);
    });

}

export default asyncMiddleware;