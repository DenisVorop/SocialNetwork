import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import './Messages.scss'
import ui from '../../../scss/ui.module.scss';
import { createRef } from 'react';

const Messages = (props) => {
    let dialogsElements =
        props.stateMessagesPage.dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)

    let messagesElements =
        props.stateMessagesPage.messageData.map(message => <Message textMessage={message.message} />)

    let newMessageElement = createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
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
                            <textarea className={ui._area} ref={newMessageElement}></textarea>
                        </div>
                        <div>
                            <button className={ui._btn} onClick={addMessage}> add message </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;
