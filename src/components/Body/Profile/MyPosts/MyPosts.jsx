import Post from "./Post/Post";
import ui from '../../../../scss/ui.module.scss';

let MyPosts = (props) => {
    let postElements =
        props.postData.map(post => <Post message={post.message} />)

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
