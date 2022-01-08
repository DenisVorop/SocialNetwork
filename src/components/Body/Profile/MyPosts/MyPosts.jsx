import Post from "./Post/Post";
import ui from '../../../../scss/ui.module.scss';


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
        <Post message='My first post' />
        <Post message='My second post' />
        <Post message='My third post' />
      </div>
    </div>
  );
}

export default MyPosts;
