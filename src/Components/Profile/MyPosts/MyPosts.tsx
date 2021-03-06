import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from './../../../utils/validators/validators';
import { Textarea } from '../../../utils/FormsControls/FormsControls';

type PostType = {
    id: number,
    message: string,
    likesCount: number
}

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (text: string) => void
}

// class MyPosts extends React.PureComponent<MyPostsPropsType> {

    
//     render() {
//         let postsItems = this.props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />)

//         let addNewPost = (values: AddPostDataType) => {
//             this.props.addPost(values.post)
//         }

//         return (
//             <div className={s.PostsContainer}>
//                 <h3>My posts</h3>
//                 <AddPostFormRedux onSubmit={addNewPost} />
//                 <div className={s.posts}>
//                     {postsItems}
//                 </div>
//             </div>
//         )
//     }
// }
 
const MyPosts: React.FC<MyPostsPropsType> = React.memo((props) => {

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
});

export type AddPostDataType = {
    post: string
}

const maxLength10 = maxLengthCreator(10);

let AddPostForm: React.FC<InjectedFormProps<AddPostDataType>> = (props) => {
    return (
        <form className={s.Form} onSubmit={props.handleSubmit}>
            <div className={s.Textfield}>
                <Field name='post' component={Textarea} validate={[requiredField, maxLength10]} />
            </div>
            <div className={s.ButtonBox}>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddPostFormRedux = reduxForm<AddPostDataType>({
    form: "addPostForm"
})(AddPostForm)

export default MyPosts;