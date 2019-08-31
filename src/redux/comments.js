import * as ActionTypes from 'redux/actionTypes';

export const Comments = (state = {comments : []},action) => {
    switch(action.type){
        
        case ActionTypes.SAVE_COMMENT :
            var newComment = action.payload;
            return {...state, comments : state.comments.concat(newComment)};

        default :
            return state;
    }
}