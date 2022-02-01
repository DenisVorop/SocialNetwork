import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import './Messages.scss'
import ui from '../../../scss/ui.module.scss';
import React from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';

import arrow from '../../../assets/images/arrrow.svg'

//========================================================================================================================================================

const Messages = (props) => {

    let dialogsElements =
        props.stateMessagesPage.dialogData
            .map(dialog =>
                <NavLink to='' className={diaData => diaData.isActive ? ui.dialog_active : ui.dialog}>
                    <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />
                </NavLink>)

    let messagesElements =
        props.stateMessagesPage.messageData
            .map(message =>
                <Message textMessage={message.message} key={message.id} />
            )

    const validationMessages = yup.object().shape({
        newMessageText: yup.string().typeError('string expected!').required('Obligatory field!'),
    })

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText)
    }

    return (
        <div className="body__messages messages-body">
            <div className='messages-body__row'>
                <div className="messages-body__dialogs">
                    {dialogsElements}
                </div>
                <div className='messages-body__right'>
                    <div className="messages-body__messages">
                        {messagesElements}
                    </div>
                    <form>
                        <Formik
                            initialValues={{
                                newMessageText: '',
                            }}
                            validateOnBlur
                            onSubmit={(values) => { addNewMessage(values) }}
                            validationSchema={validationMessages}
                        >
                            {({ values, errors, touched, handleBlur, isValid, handleSubmit, handleChange, dirty }) => (
                                // <div className="messages-body__form">
                                //     <div>
                                //         <textarea placeholder='Write smth here and tap to btn'
                                //             className={ui._area}
                                //             type="text"
                                //             name='newMessageText'
                                //             onChange={handleChange}
                                //             onBlur={handleBlur}
                                //             value={values.newMessageText}
                                //         />
                                //     </div>
                                //     {touched.newMessageText && errors.newMessageText && <p className='error'>{errors.newMessageText}</p>}
                                //     <div>
                                //         <button
                                //             className={ui._btn}
                                //             disabled={!isValid && !dirty}
                                //             onClick={handleSubmit}
                                //             type='submit'
                                //         >add message</button>
                                //     </div>
                                // </div>
                                <div className="messages-body__form">
                                    <div className="profile-body__form">
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
                                        <div className="profile-body__addpost">
                                            <button
                                                disabled={!isValid && !dirty}
                                                onClick={handleSubmit}
                                                type='submit'
                                            >
                                                <img src={arrow} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    {touched.newMessageText && errors.newMessageText && <p className='error'>{errors.newMessageText}</p>}
                                </div>
                            )}
                        </Formik>
                    </form>
                </div>
            </div>
        </div>
    );
}

//========================================================================================================================================================

export default Messages;
