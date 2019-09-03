import React, { Component } from 'react';

const requireAuth = (ChildComponent) => {
    class ComposedComponent extends Component {

        // when component gets updated.
        componentDidMount() {
            this.shouldNavigateAway();
        }

        // when the component gets new props and updates.
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if(!this.props.isLoggedIn){
                this.props.history.push("/");
            }
        }
        
        render() {
            return <ChildComponent {...this.props} />
        }
    }

    return ComposedComponent;
}

export default requireAuth;