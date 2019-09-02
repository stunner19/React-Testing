import React, {Component} from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import {connect} from 'react-redux';
import {saveComment, fetchComments} from 'redux/actionCreators';
import Header from './HeaderComponent';

const mapStateToProps = state => {
    return {
        comments : state.comments,
        auth : state.auth
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
                <Header auth  = {this.props.auth.isLoggedIn} />
                <Switch>
                    <Route exact path = "/" component = {() => <CommentList comments = {this.props.comments.comments} /> } />
                    <Route path = "/post" component = {() => <CommentBox saveComment = {this.props.saveComment} fetchComments = {this.props.fetchComments} /> } />
                    <Redirect to = "/" component = {() => <CommentList comments = {this.props.comments.comments} /> } />
                </Switch>
            </React.Fragment>
        );
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);