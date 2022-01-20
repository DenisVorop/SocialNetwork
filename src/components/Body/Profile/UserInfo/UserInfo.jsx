import Preloader from '../../../common/preloader/Preloader';

//========================================================================================================================================================

let UserInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className="profile-body__user">
            <div className="profile-body__user-info">
                <div className="profile-body__avatar">
                    <img src={props.profile.photos.large} />
                </div>
                <div className="profile-body__info info-profile-body">
                    <div className="info-profile-body__name">{props.profile.fullName ? props.profile.fullName : 'ФулНэйм'}</div>
                    <div className="info-profile-body__job">{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'Job search not specified'}</div>
                    <div className="info-profile-body__inst">{props.profile.contacts.instagram ? props.profile.contacts.instagram : 'Instagram not specified'}</div>
                    <div className="info-profile-body__vk">{props.profile.contacts.vk ? props.profile.contacts.vk : 'VK not specified'}</div>
                    <div className="info-profile-body__website"><a href="#">{props.profile.contacts.github ? props.profile.contacts.github : 'Site not specified'}</a></div>
                </div>
            </div>
        </div>
    );
}

//========================================================================================================================================================

export default UserInfo;
