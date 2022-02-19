import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/ProfileReducer';
import { StoreType } from '../../../redux/store';
import StoreContext from '../../../store-context';
import MyPosts from './MyPosts';

type MyPostsContainerPropsType = {
    store?: StoreType
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => { 
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostAC());
                    }
                
                    let updateNewPostText = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text));
                    }

                    return <MyPosts updateNewPostText={updateNewPostText}
                        addPost={addPost}
                        newPostText={state.profilePage.newPostText}
                        posts={state.profilePage.postData} />
                }
            }

        </StoreContext.Consumer>

    )
}
export default MyPostsContainer;