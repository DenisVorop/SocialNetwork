import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

//========================================================================================================================================================

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
