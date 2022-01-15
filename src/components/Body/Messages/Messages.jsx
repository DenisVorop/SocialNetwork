import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import './Messages.scss'
import ui from '../../../scss/ui.module.scss';
import { createRef } from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/messagesReducer';

//========================================================================================================================================================

const Messages = (props) => {

    let dialogsElements =
        props.stateMessagesPage.dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)

    let messagesElements =
        props.stateMessagesPage.messageData.map(message => <Message textMessage={message.message} />)

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let newMessageElement = e.target.value;
        let text = newMessageElement;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
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
                    <div className="messages-body__form">
                        <div>
                            <textarea
                                className={ui._area}
                                onChange={onMessageChange}
                                value={props.stateMessagesPage.newMessageText}
                            />
                        </div>
                        <div>
                            <button className={ui._btn} onClick={addMessage}>add message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//========================================================================================================================================================

export default Messages;
