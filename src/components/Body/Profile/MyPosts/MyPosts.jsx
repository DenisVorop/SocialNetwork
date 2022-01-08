import Post from "./Post/Post";


let MyPosts = () => {
  return (
    <div className="profile-body__my">My posts
      <div className="profile-body__myPosts">
        <textarea name="" id="" cols="10" rows="2"></textarea>
        <button className="post-btn">Add post</button>
        <Post message='My first post'/>
        <Post message='I love Pupsyu (Dashenku)'/>
      </div>
    </div>
  );
}

export default MyPosts;
