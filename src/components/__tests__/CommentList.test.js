import React from 'react';
import {mount} from 'enzyme';
import Root from 'root';
import CommentList from 'components/CommentList';

let wrapped;
beforeEach(() => {
    const comments = ['Comment1','Comment2'];

    wrapped = mount(
        <Root>
            <CommentList comments = {comments}/>
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('creates one LI element per commnet', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

// toEqual compares the given text with the entire HTML;
// toContain checks whether the given text is present in the HTML or not;
it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment1');
    expect(wrapped.render().text()).toContain('Comment2');
});