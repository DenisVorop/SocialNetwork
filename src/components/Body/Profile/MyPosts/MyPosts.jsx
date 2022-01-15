import Post from "./Post/Post";
import ui from '../../../../scss/ui.module.scss';
import { createRef } from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../Redux/profileReducer";

//========================================================================================================================================================

let MyPosts = (props) => {
    let postElements =
        props.postData.map(post => <Post message={post.message} />)

    let addPost = () => {
        props.dispatch(addPostActionCreator()); // Вызываем функцию addPost при клике на кнопку
    }

    let onPostChange = (e) => {
        let newPostElement = e.target.value; // Получаем значение элемента
        let text = newPostElement; // Значение, которое хотим зафиксировать
        let action = updateNewPostTextActionCreator(text); // Можно в одну строку без let
        props.dispatch(action); // Вызываем функцию updateNewPostText со значением, которое пришло в text при изменении в textarea
    }

    return (
        <div className="profile-body__input">
            <div className="profile-body__my">My posts</div>
            <div className="profile-body__myPosts">
                <div>
                    <textarea
                        className={ui._area}
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button className={ui._btn} onClick={addPost}>add post</button>
                </div>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;
