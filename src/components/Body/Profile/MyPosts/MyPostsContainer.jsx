import { addPostActionCreator } from "../../../../Redux/profileReducer.ts";
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
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

//========================================================================================================================================================

export default MyPostsContainer;
