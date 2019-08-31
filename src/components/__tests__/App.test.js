import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';   // We can use absolute paths now. If there is another level of hierarchy, then we can write something like components/temp/fileName.
import Main from 'components/MainComponent';

// Before every single test, we will use these set of statements. So if there are some statements which are common all the tests, then we can
// move those lines in the beforeEach block and these lines will run before every test.
let wrapped;    // wrapped should be present in the global scope. (Don't use const because wrapped be assigned values several times).
beforeEach(() => {
    wrapped = shallow(<App />);
})

// it implies the name of the component.
it('shows a Main Component', () => {
    expect(wrapped.find(Main).length).toEqual(1); // this function returns an array. So on returnig the length, if there is one copy of Comment Box, it will return 1, else 0.
});