import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../../Redux/authReducer.ts';
import FormLogin from './FormLogin';
import './Login.scss';
import React from 'react';

//========================================================================================================================================================

const Login = (props) => {
    let getValues = (values, setStatus) => {
        props.login(values.login, values.password, setStatus, values.captcha);
    }

    if (props.isAuth) {
        return <Navigate to='/profile' />
    }

    return (
        <div className="login">
            <div className="login__body">
                <div className="login__form">
                    <FormLogin getValues={getValues} captchaUrl={props.captchaUrl} />
                </div>
            </div>
        </div>
    )
}

const MapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    captchaUrl: state.authReducer.captchaUrl,
})

//========================================================================================================================================================

export default connect(MapStateToProps, { login })(Login);
