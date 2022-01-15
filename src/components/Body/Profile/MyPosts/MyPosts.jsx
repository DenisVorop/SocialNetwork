import Post from "./Post/Post";
import ui from '../../../../scss/ui.module.scss';

//========================================================================================================================================================

let MyPosts = (props) => {
    let postElements = props.posts.map(post => <Post message={post.message} />)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let newPostElement = e.target.value;
        let text = newPostElement; // Получаем значение элемента
        props.updateNewPostText(text); // Вызываем функцию postChange со значением, которое пришло в text при изменении в textarea
    }
    // debugger
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
                    <button className={ui._btn} onClick={onAddPost}>add post</button>
                </div>
                {postElements}
            </div>
        </div>
    );
}

//========================================================================================================================================================

export default MyPosts;
