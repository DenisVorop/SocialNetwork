import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux"
import { getStatus, setUser, setUserProfile, updateStatus } from '../../../Redux/profileReducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

//========================================================================================================================================================
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params ? this.props.params.userId : '21768';
        this.props.setUser(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.stateProfilePage.profile,
        status: state.stateProfilePage.status,
    }
}
const mapDispatchToProps = {
    setUserProfile,
    setUser,
    getStatus,
    updateStatus,
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
