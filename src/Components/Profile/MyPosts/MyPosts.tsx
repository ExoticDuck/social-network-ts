import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type PostType = {
    id: number,
    message: string,
    likesCount: number
}

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (text: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsItems = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />)

    let addNewPost = (values: AddPostDataType) => {
        props.addPost(values.post)
    }

    return (
        <div className={s.PostsContainer}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    )
}

type AddPostDataType = {
    post: string
}
let AddPostForm: React.FC<InjectedFormProps<AddPostDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='post' component="textarea" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddPostFormRedux = reduxForm<AddPostDataType>({
    form: "addPostForm"
})(AddPostForm)

export default MyPosts;