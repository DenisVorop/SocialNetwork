import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

//========================================================================================================================================================

let MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator()); // Вызываем функцию addPost при клике на кнопку
    }

    let postChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<MyPosts
        updateNewPostText={postChange}
        addPost={addPost}
        posts={state.stateProfilePage.postData}
        newPostText={state.stateProfilePage.newPostText} />);
}

//========================================================================================================================================================

export default MyPostsContainer;
