import Profile from './Profile';
import axios from 'axios';
import React from 'react';
import { connect } from "react-redux"
import { setUserProfile } from '../../../Redux/profileReducer';

//========================================================================================================================================================

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.stateProfilePage.profile,
    }
}
let mapDispatchToProps = {
    setUserProfile,
}
//========================================================================================================================================================

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
