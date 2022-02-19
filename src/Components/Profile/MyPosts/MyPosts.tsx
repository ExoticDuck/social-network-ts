import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type PostType = {
    id: number,
    message: string,
    likesCount: number
}

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text)
    }

    let postsItems = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    )
}
export default MyPosts;