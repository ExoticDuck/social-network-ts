import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addPostAC } from '../../../redux/ProfileReducer';
import { AppStateType } from '../../../redux/redux-store';
import { PostType } from '../../../redux/store';
import MyPosts from './MyPosts';


type mapDispatchToPropsType = {
    addPost: (text: string) => void
}

type mapStateToPropsType = {
    posts: Array<PostType>
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.postData
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (text: string) => {dispatch(addPostAC(text))}
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;