import Profile from './Profile';
import React from 'react';
import { connect } from "react-redux"
import { setUser, setUserProfile } from '../../../Redux/profileReducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

//========================================================================================================================================================
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params ? this.props.params.userId : '21768';
        this.props.setUser(userId);
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.stateProfilePage.profile,
    }
}
const mapDispatchToProps = {
    setUserProfile,
    setUser,
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
