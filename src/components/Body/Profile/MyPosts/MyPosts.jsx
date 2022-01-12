import Post from "./Post/Post";
import ui from '../../../../scss/ui.module.scss';
import { createRef } from "react";

let MyPosts = (props) => {
    let postElements =
        props.postData.map(post => <Post message={post.message} />)

    let newPostElement = createRef(); // Получаем доступ к элементу

    let addPost = () => {
        props.addPost(); // Вызываем функцию addPost при клике на кнопку
    }

    let onPostChange = () => {
        let text = newPostElement.current.value; // Значение, которое хотим зафиксировать
        props.updateNewPostText(text); // Вызываем функцию updateNewPostText со значением, которое пришло в text при изменении в textarea
    }

    return (
        <div className="profile-body__input">
            <div className="profile-body__my">My posts</div>
            <div className="profile-body__myPosts">
                <div>
                    <textarea
                        className={ui._area}
                        ref={newPostElement}
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
