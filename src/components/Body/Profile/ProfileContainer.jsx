import Profile from './Profile';
import axios from 'axios';
import React from 'react';
import { connect } from "react-redux"
import { setUserProfile } from '../../../Redux/profileReducer';
import { useParams } from 'react-router-dom';

//========================================================================================================================================================
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params ? this.props.params.userId : '21768';
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(({ data }) => {
            this.props.setUserProfile(data);
        });
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
}

const ProfileURLMatch = (props) => {
    const params = useParams();
    return (
        <ProfileContainer {...props} params={params}/>
    );
}

//========================================================================================================================================================

export default connect(mapStateToProps, mapDispatchToProps)(ProfileURLMatch);
