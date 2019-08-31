import React from 'react';
import {mount} from 'enzyme'; // used for fullDOM.
import CommentBox from 'components/CommentBox';
import {saveComment} from 'redux/actionCreators';

let wrapped;
beforeEach(() => {
    wrapped = mount(<CommentBox saveComment = {saveComment}/>);
});

// for cleanup, we use afterEach
afterEach(() => {
    // unmonts the component from the tree. 
    wrapped.unmount();    
})

it('has a text area and two buttons', () => {  

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
    // while using FUllDOM, we need to cleanup.
});

describe('the text area', () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate('change',{
            target : {
                value : 'new comment'
            }
        });
        wrapped.update();
    });

    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when form gets submitted, the textarea gets cleared', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});