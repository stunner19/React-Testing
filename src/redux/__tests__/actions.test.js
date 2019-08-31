import * as ActionTypes from 'redux/actionTypes';
import {saveComment} from 'redux/actionCreators';


describe('saveComment', () => {

    it('has the correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual(ActionTypes.SAVE_COMMENT);
    });

    it('has the correct payload', () => {
        const action = saveComment('New Comment');
        expect(action.payload).toEqual('New Comment');
    });
});