import { Form, Formik } from 'formik';
import ui from '../../../scss/ui.module.scss';
import form from '../../../scss/formik.module.scss';
import * as yup from 'yup';
import React from 'react';

//========================================================================================================================================================

const FormLogin = (props) => {
    const validationLogin = yup.object().shape({
        login: yup.string().typeError('string expected!').required('Obligatory field!'),
        password: yup.string().typeError('string expected!').required('Obligatory field!'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], ('Password mismatch!')).required('Obligatory field!')
    })

    return (
        <Formik
            initialValues={{
                login: '',
                password: '',
                confirmPassword: '',
                captcha: '',
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
                    <div className={form.wrapper}>
                        <div className={form.login}>
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
                        <div className={form.password}>
                            <div>
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
                        </div >
                        {props.captchaUrl && <img src={props.captchaUrl} />}
                        {props.captchaUrl &&
                            <p>
                                <label htmlFor={`captcha`}>Anti-bot symbol</label><br />
                                <input
                                    className={ui.input}
                                    type="captcha"
                                    name='captcha'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.captcha}
                                />
                            </p>
                        }
                        <div className={ui.error}>
                            {status}
                        </div>
                        <div className={form.button}>
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
    )
}

//========================================================================================================================================================

export default FormLogin;
