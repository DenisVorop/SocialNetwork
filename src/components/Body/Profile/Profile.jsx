import './Profile.scss';
import MyPosts from './MyPosts/MyPosts';
import UserInfo from './UserInfo/UserInfo';

let Profile = (props) => {
    return (
        <div className="body__profile profile-body">
            <div className="profile-body__board">
                <img src="http://torrenther.com/uploads/posts/soft/2017-04/149120497533e21db0db46b11eeac0b3056d1d170af.jpeg" />
            </div>
            <div className="profile-body__user">
                <UserInfo />
            </div>
            <div className="profile-body__posts">
                <MyPosts
                    postData={props.stateProfilePage.postData}
                    newPostText={props.stateProfilePage.newPostText}
                    dispatch={props.dispatch} />
            </div>
        </div>
    );
}

export default Profile;
