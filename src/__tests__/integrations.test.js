import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'root';
import Main from 'components/MainComponent';

beforeEach(() => {
    moxios.install();   // intercept any request made by axios.
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status : 200,
        response : [{name : 'Fetched #1'}, {name : 'Fetched #2'}]
    });
});

afterEach(() => {
    moxios.uninstall(); // dont use the above request for any other test.
});

it('can fetch a list of comments and display them', (done) => {
    // Attempt to render the entire app.
    const wrapped = mount(
        <Root>
            <Main />
        </Root>
    );

    // find the fetchComments button.
    wrapped.find('.fetch-comments').simulate('click');

    // Introduce a tiny pause.
    moxios.wait(() => {
        // Expect to find a list of Li's.
        wrapped.update();   // force the update as state gets changed due to comments.
        expect(wrapped.find('li').length).toEqual(2);

        done();
        wrapped.unmount();
    });
});