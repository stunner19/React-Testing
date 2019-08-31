import React from 'react';
import { ConfigureStore } from 'redux/configureStore';
import { Provider } from 'react-redux';

const store = ConfigureStore();
    
const Root = (props) => {
    return(
        <Provider store = {store}>
            {props.children}
        </Provider>
    );
}

export default Root;