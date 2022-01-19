let UserInfo = (props) => {
    return (
        <div className="profile-body__user">
            <div className="profile-body__user-info">
                <div className="profile-body__avatar">
                    <img src={props.profile.photos.large} />
                </div>
                <div className="profile-body__info info-profile-body">
                    <div className="info-profile-body__name">{props.profile.fullName}</div>
                    <div className="info-profile-body__job">{props.profile.lookingForAJobDescription}</div>
                    <div className="info-profile-body__inst">{props.profile.contacts.instagram}</div>
                    <div className="info-profile-body__vk">{props.profile.contacts.vk}</div>
                    <div className="info-profile-body__website"><a href="#">{props.profile.contacts.github}</a></div>
                </div>
            </div>
        </div>
    );
}

//========================================================================================================================================================

export default UserInfo;
