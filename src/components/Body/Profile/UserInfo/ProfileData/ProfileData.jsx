import ui from '../../../../../scss/ui.module.scss';

//========================================================================================================================================================

const ProfileData = (props) => {
    return (
        <>
            <div className='profile__setedit'>
                <p>More information</p>
                <div className='profile__settings'>
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
            </div>
        </>
    )
}

export default ProfileData;

// const Contacts = (props) => {
//     return (
//         <div className={ui.contacts}>
//             <b>{props.contactTitle}:</b> {props.contactValue}
//         </div>
//     )
// }
