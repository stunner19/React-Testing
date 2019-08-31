import * as ActionTypes from 'redux/actionTypes';
import axios from 'axios';

export const saveComment = (newComment) => ({ 
    type : ActionTypes.SAVE_COMMENT,
    payload : newComment
});

export const fetchComments = () => (dispatch) => {
    return axios.get('http://jsonplaceholder.typicode.com/comments')
    .then(response => {
            if (response.status === 200) {
                return response;
            } 
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        }
    )
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));

    // in axios the response is already converted into json, so no need to use response.json().
};

export const addComments  = (comments) => ({
    type : ActionTypes.ADD_COMMENTS,
    payload : comments
});

export const commentsFailed = (errmess) => ({
    type : ActionTypes.COMMENTS_FAILED,
    payload : errmess
});