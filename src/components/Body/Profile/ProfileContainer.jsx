import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux"
import { getStatus, setUser, setUserProfile, updateStatus, savePhoto } from '../../../Redux/profileReducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

//========================================================================================================================================================
class ProfileContainer extends React.Component {

    profileRefresh() {
        let userId = this.props.params.userId ? this.props.params.userId : this.props.authorizedUserId; // @mail
        this.props.setUser(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.profileRefresh();
    }

    componentDidUpdate(prevProps) {
        if (this.props.params != prevProps.params) {
            this.profileRefresh();
        }
    }

    render() {
        return <>
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.params.userId}
                savePhoto={this.props.savePhoto}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.stateProfilePage.profile,
        status: state.stateProfilePage.status,
        authorizedUserId: state.authReducer.userId,
        isAuth: state.authReducer.isAuth,
    }
}
const mapDispatchToProps = {
    setUserProfile,
    setUser,
    getStatus,
    updateStatus,
    savePhoto,
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const ProfileURLMatch = (props) => {
    const params = useParams();
    return (
        <AuthRedirectComponent {...props} params={params} />
    );
}

//========================================================================================================================================================

export default connect(mapStateToProps, mapDispatchToProps)(ProfileURLMatch);
