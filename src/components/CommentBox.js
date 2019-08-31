import React, {Component} from 'react';

class CommentBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            comment : ''
        };
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

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange = {this.handleChange} value = {this.state.comment}></textarea>
                <div>
                    <button>Submit Component</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;