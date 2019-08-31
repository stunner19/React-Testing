import React, {Component} from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import {connect} from 'react-redux';
import {saveComment, fetchComments} from 'redux/actionCreators';

const mapStateToProps = state => {
    return {
        comments : state.comments
    }   
};

const mapDispatchToProps = dispatch => ({
    saveComment: (newComment) => dispatch(saveComment(newComment)),
    fetchComments : () => { dispatch(fetchComments()) }
});

class Main extends Component {
    render(){
        return(
            <React.Fragment>
                <CommentBox saveComment = {this.props.saveComment} fetchComments = {this.props.fetchComments} />
                <CommentList comments = {this.props.comments.comments} />
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
