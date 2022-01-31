import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.scss';
import UserInfo from './UserInfo/UserInfo';
import React from 'react';
import Preloader from '../../common/Preloader/Preloader';

//========================================================================================================================================================

let Profile = (props) => {
    return (
        <div className="body__profile profile-body">
            <UserInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    );
}

//========================================================================================================================================================

export default Profile;
