import {createStore, combineReducers,applyMiddleware} from 'redux';
import { Comments } from './comments';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import asyncMiddleware from './middlewares/aysnc';
import stateValidator from './middlewares/stateValidator';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            comments : Comments,
            auth : Auth
        }),
        applyMiddleware(thunk,logger,asyncMiddleware,stateValidator)
    );

    return store;
}