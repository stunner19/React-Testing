import React,{Component} from 'react';

class CommentList extends Component {

    renderComments() {
        return this.props.comments.map((comment) => {
            return <li key = {comment}>{comment}</li>
        })
    }

    render(){
        return(
            <div className = "container">
                <h2>Comment List</h2>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        );
    }
}

export default CommentList;