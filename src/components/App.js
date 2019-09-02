import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from 'components/MainComponent';
import Root from 'root';

class App extends Component{

    render(){
        return(
            <div className = "App">
                <Root>
                    <BrowserRouter>
                        <Main />
                    </BrowserRouter>
                </Root>
            </div>
        );
    }
}

export default App;
