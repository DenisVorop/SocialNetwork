import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.scss';
import UserInfo from './UserInfo/UserInfo';
import React from 'react';

//========================================================================================================================================================

let Profile = (props) => {
    return (
        <div className="body__profile profile-body">
            <div className="profile-body__board">
                <img src="http://torrenther.com/uploads/posts/soft/2017-04/149120497533e21db0db46b11eeac0b3056d1d170af.jpeg" />
            </div>
            <UserInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    );
}

//========================================================================================================================================================

export default Profile;
