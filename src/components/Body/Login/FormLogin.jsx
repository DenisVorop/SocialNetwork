import { Form, Formik } from 'formik';
import ui from '../../../scss/ui.module.scss';
import * as yup from 'yup';
import React from 'react';

//========================================================================================================================================================

const FormLogin = (props) => {
    console.log(props)

    const validationLogin = yup.object().shape({
        login: yup.string().typeError('string expected!').required('Obligatory field!'),
        password: yup.string().typeError('string expected!').required('Obligatory field!'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], ('Password mismatch!')).required('Obligatory field!')
    })
    return (
        <>
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                    confirmPassword: '',
                }}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={(values, { setSubmitting, setStatus }) => {
                    props.getValues(values, setStatus);
                    setSubmitting(false);
                }}
                validationSchema={validationLogin}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, status }) => (
                    <Form>
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
                            <div className={ui.error}>
                                {status}
                            </div>
                            <div className="button__form">
                                <button
                                    className={ui._btn}
                                    disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    type='submit'
                                >Login</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </ >
    )
}

//========================================================================================================================================================

export default FormLogin;
