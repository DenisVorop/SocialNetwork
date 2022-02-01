import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.scss';
import UserInfo from './UserInfo/UserInfo';
import React from 'react';

//========================================================================================================================================================

let Profile = (props) => {
    return (
        <div className="body__profile profile-body">
            <UserInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer />
        </div>
    );
}

//========================================================================================================================================================

export default Profile;
