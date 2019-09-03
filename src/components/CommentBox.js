import React, {Component} from 'react';

class CommentBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            comment : ''
        };
        this.shouldNavigateAway = this.shouldNavigateAway.bind(this);
    }

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

    handleChange = (event) => {
        this.setState({
            comment : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({
            comment : ''
        });
    }

    handleClick = (event) => {
        this.props.fetchComments();
    }

    render(){
        return(
            <div className = "container">
                <form onSubmit = {this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange = {this.handleChange} value = {this.state.comment}></textarea>
                    <div>
                        <button>Submit Component</button>
                    </div>
                </form>
                <div>
                    <button className = "fetch-comments" onClick = {this.handleClick}>Fetch Comments</button>
                </div>
            </div>
        );
    }
}

export default CommentBox;