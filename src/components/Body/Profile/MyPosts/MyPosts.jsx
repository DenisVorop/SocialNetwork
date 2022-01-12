import Post from "./Post/Post";
import ui from '../../../../scss/ui.module.scss';
import { createRef } from "react";

let MyPosts = (props) => {
    let postElements =
        props.postData.map(post => <Post message={post.message} />)

    let newPostElement = createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className="profile-body__input">
            <div className="profile-body__my">My posts</div>
            <div className="profile-body__myPosts">
                <div>
                    <textarea
                        className={ui._area}
                        onChange={onPostChange}
                        ref={newPostElement}
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
