import { Form, Formik } from 'formik';
import * as yup from 'yup';

import ui from '../../../scss/ui.module.scss';
import arrow from '../../../assets/images/arrrow.svg'

//========================================================================================================================================================

export const MessagesForm = (props) => {
    const validationMessages = yup.object().shape({
        newMessageText: yup.string().typeError('string expected!').required('Obligatory field!'),
    })
    return (
        <Formik
            initialValues={{
                newMessageText: '',
            }}
            validateOnBlur
            onSubmit={(values, {resetForm}) => {
                props.addNewMessage(values)
                resetForm({ newMessageText: '' })
            }}
            validationSchema={validationMessages}
        >
            {({ values, errors, touched, handleBlur, handleSubmit, handleChange }) => (
                <div className="messages-body__form">
                    <div className="profile-body__form">
                        <Form>
                            <div>
                                <textarea placeholder='Write smth here and tap to btn'
                                    className={ui._area}
                                    type="text"
                                    name='newMessageText'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.newMessageText}
                                />
                            </div>
                        </Form>
                        <div className="profile-body__addpost">
                            <button
                                disabled={props.webSocket.readyState !== WebSocket.OPEN}
                                onClick={handleSubmit}
                                type='submit'
                                className={ui.search}
                            >
                                <img src={arrow} alt="" />
                            </button>
                        </div>
                    </div>
                    {touched.newMessageText && errors.newMessageText && <p className='error'>{errors.newMessageText}</p>}
                </div>
            )}
        </Formik>
    )
}
