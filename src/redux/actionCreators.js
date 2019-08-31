import * as ActionTypes from 'redux/actionTypes';

export const saveComment = (newComment) => ({ 
    type : ActionTypes.SAVE_COMMENT,
    payload : newComment
});