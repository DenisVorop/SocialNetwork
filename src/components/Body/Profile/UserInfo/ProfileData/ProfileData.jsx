
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

//========================================================================================================================================================

export default ProfileData;
