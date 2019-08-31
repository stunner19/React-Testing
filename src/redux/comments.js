import * as ActionTypes from 'redux/actionTypes';

export const Comments = (state = {comments : []},action) => {
    switch(action.type){
        
        case ActionTypes.SAVE_COMMENT :
            var newComment = action.payload;
            return {...state, comments : state.comments.concat(newComment)};

        case ActionTypes.ADD_COMMENTS : 
            var newComments = action.payload.data;  // data is the name of the array in the json object.
            var Comments = newComments.map(comment => comment.name);
            return {...state,comments : state.comments.concat(Comments)};

        default :
            return state;
    }
}