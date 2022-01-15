import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

//========================================================================================================================================================

// let MyPostsContainer = () => {
//     let state = store.getState();

//     let addPost = () => {
//         store.dispatch(addPostActionCreator()); // Вызываем функцию addPost при клике на кнопку
//     }

//     let postChange = (text) => {
//         let action = updateNewPostTextActionCreator(text);
//         store.dispatch(action);
//     }
//     return (
//         <MyPosts
//             updateNewPostText={postChange}
//             addPost={addPost}
//             posts={state.stateProfilePage.postData}
//             newPostText={state.stateProfilePage.newPostText} />
//     );
// }

let mapStateToProps = (state) => {
    return {
        posts: state.stateProfilePage.postData,
        newPostText: state.stateProfilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator()); // Вызываем функцию addPost при клике на кнопку
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

//========================================================================================================================================================

export default MyPostsContainer;
