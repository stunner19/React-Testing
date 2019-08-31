import * as ActionTypes from 'redux/actionTypes';
import { Comments } from 'redux/comments';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type : ActionTypes.SAVE_COMMENT,
        payload : 'New Comment'
    };

    const newState = Comments({comments : []},action);
    expect(newState).toEqual({
        comments : ['New Comment']
    });
});

it('handles actions with unknowm types', () => {
    const action = {
        type : 'ABC'
    };

    const newState = Comments({comments : []},action);
    expect(newState).toEqual({comments : []});
});