import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addPostAC, updateNewPostTextAC } from '../../../redux/ProfileReducer';
import { AppStateType } from '../../../redux/redux-store';
import { PostType } from '../../../redux/store';
import MyPosts from './MyPosts';


type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {dispatch(addPostAC())},
        updateNewPostText: (text: string) => {dispatch(updateNewPostTextAC(text))} 
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;