import React, {Component} from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import {connect} from 'react-redux';
import {saveComment, fetchComments, changeAuth} from 'redux/actionCreators';
import Header from './HeaderComponent';

const mapStateToProps = state => {
    return {
        comments : state.comments,
        auth : state.auth
    }   
};

const mapDispatchToProps = dispatch => ({
    saveComment: (newComment) => dispatch(saveComment(newComment)),
    fetchComments : () => { dispatch(fetchComments()) },
    changeAuth : (isLoggedIn) => dispatch(changeAuth(isLoggedIn))
});

class Main extends Component {
    render(){
        return(
            <React.Fragment>
                <Header isLoggedIn  = {this.props.auth.isLoggedIn} changeAuth = {this.props.changeAuth} />
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