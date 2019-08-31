import React from 'react';
import {mount} from 'enzyme'; // used for fullDOM.
import CommentBox from 'components/CommentBox'; // We can use absolute paths now. If there is another level of hierarchy, then we can write something like components/temp/fileName.
import CommentList from 'components/CommentList';
import Main from 'components/MainComponent';
import Root from 'root';

// Before every single test, we will use these set of statements. So if there are some statements which are common all the tests, then we can
// move those lines in the beforeEach block and these lines will run before every test.
let wrapped;    // wrapped should be present in the global scope. (Don't use const because wrapped be assigned values several times).
beforeEach(() => {
    wrapped = mount(
        <Root>
            <Main />
        </Root>
    );
})

// it implies the name of the component.
it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1); // this function returns an array. So on returnig the length, if there is one copy of Comment Box, it will return 1, else 0.
});

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});

