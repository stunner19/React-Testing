import React, {Component} from 'react';
import Main from 'components/MainComponent';
import Root from 'root';

class App extends Component{

    render(){
        return(
            <div className = "App">
                <Root>
                    <Main />
                </Root>
            </div>
        );
    }
}

export default App;
