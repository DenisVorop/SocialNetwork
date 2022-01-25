import { Formik } from 'formik';
import './Login.scss';
import ui from '../../../scss/ui.module.scss';
import * as yup from 'yup';

//========================================================================================================================================================

const Login = () => {
    const validationLogin = yup.object().shape({
        login: yup.string().typeError('string expected!').required('Obligatory field!'),
        password: yup.string().typeError('string expected!').required('Obligatory field!'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], ('Password mismatch!')).required('Obligatory field!')
    })

    return (
        <div className="body__login login-body">
            <div className="login-body__form">
                <Formik
                    initialValues={{
                        login: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    validateOnBlur
                    onSubmit={(values) => { console.log(values) }}
                    validationSchema={validationLogin}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <div className='form'>
                            <div className="login__form">
                                <p>
                                    <label htmlFor={`login`}>Login</label><br />
                                    <input
                                        className={ui.input}
                                        type="text"
                                        name='login'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.login}
                                    />
                                </p>
                                {touched.login && errors.login && <p className='error'>{errors.login}</p>}
                            </div>
                            <div className="password__form">
                                <div className='password'>
                                    <p>
                                        <label htmlFor={`password`}>Password</label><br />
                                        <input
                                            className={ui.input}
                                            type="password"
                                            name='password'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                    </p>
                                    {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                                </div>
                                <div>
                                    <p>
                                        <label htmlFor={`confirmPassword`}>Confirm password</label><br />
                                        <input
                                            className={ui.input}
                                            type="password"
                                            name='confirmPassword'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirmPassword}
                                        />
                                    </p>
                                    {touched.confirmPassword && errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
                                </div>
                            </div>
                            <div className="button__form">
                                <button
                                    className={ui._btn}
                                    disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    type='submit'
                                >Submit</button>
                            </div>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}

//========================================================================================================================================================

export default Login;
