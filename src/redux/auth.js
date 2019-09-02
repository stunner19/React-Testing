import * as ActionTypes from 'redux/actionTypes';

export const Auth = (state = { isLoggedIn : false},action) => {
    switch(action.type){

        case ActionTypes.CHANGE_AUTH : 
            return action.payload;

        default : 
            return state;
    }
}