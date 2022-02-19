import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
            <div className={s.item}><img src="https://cs13.pikabu.ru/avatars/2487/x2487329-146029786.png" alt="avatar"></img>
                {props.message}  
                <span className={s.likesCount}>{props.likesCount} likes</span>
            </div>
    );
}
export default Post;