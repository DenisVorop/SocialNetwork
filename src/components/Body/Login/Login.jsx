import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../../Redux/authReducer';
import FormLogin from './FormLogin';
import './Login.scss';

//========================================================================================================================================================

const Login = (props) => {
    let getValues = (values, setStatus) => {
        props.login(values.login, values.password, setStatus);
    }

    if (props.isAuth) {
        return <Navigate to='/profile/21985' />
    }

    return (
        <div className="body__login login-body">
            <div className="login-body__form">
                <FormLogin getValues={getValues} />
            </div>
        </div>
    )
}

const MapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
})

//========================================================================================================================================================

export default connect(MapStateToProps, { login, })(Login);
