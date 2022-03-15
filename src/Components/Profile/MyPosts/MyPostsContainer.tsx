import React from 'react';
import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC } from '../../../redux/ProfileReducer';
import { AppStateType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {dispatch(addPostAC())},
        updateNewPostText: (text: string) => {dispatch(updateNewPostTextAC(text))} 
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;