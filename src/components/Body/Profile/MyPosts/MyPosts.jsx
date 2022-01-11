import Post from "./Post/Post";
import ui from '../../../../scss/ui.module.scss';

let postData = [
    { id: 1, message: 'My first post' },
    { id: 2, message: 'My second post' },
    { id: 3, message: 'My third post' },
]

let postElements = postData
    .map(post => <Post message={post.message} />)

let MyPosts = () => {
    return (
        <div className="profile-body__input">
            <div className="profile-body__my">My posts</div>
            <div className="profile-body__myPosts">
                <div>
                    <textarea className={ui.post_area} cols="10" rows="2"></textarea>
                </div>
                <div>
                    <button className={ui.post_btn}>Add post</button>
                </div>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;
