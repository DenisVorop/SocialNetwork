import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import React from 'react';

//========================================================================================================================================================

let mapStateToProps = (state) => {
    return {
        posts: state.stateProfilePage.postData,
        newPostText: state.stateProfilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

//========================================================================================================================================================

export default MyPostsContainer;
