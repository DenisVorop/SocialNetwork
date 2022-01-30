import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

//========================================================================================================================================================

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to='/login' />;
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
