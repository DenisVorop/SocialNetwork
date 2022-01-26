import React from 'react';
import { connect } from 'react-redux';
import { getAuth, logout, setAuthUserData } from '../../Redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth();
    }

    render() {
        return <Header {...this.props} />
    }
}

const MapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
})

const MapDispatchToProps = {
    setAuthUserData,
    getAuth,
    logout,
}

export default connect(MapStateToProps, MapDispatchToProps)(HeaderContainer);
