import ui from '../../../../../scss/ui.module.scss';

//========================================================================================================================================================

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
            </div>
            <div>
                <b>About me:</b> {props.profile.aboutMe}
            </div>
        </div>
    )
}

export default ProfileData;

const Contacts = (props) => {
    return (
        <div className={ui.contacts}>
            <b>{props.contactTitle}:</b> {props.contactValue}
        </div>
    )
}
