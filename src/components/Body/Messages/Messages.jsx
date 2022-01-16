import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import './Messages.scss'
import ui from '../../../scss/ui.module.scss';

//========================================================================================================================================================

const Messages = (props) => {

    let dialogsElements =
        props.stateMessagesPage.dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />)

    let messagesElements =
        props.stateMessagesPage.messageData.map(message => <Message textMessage={message.message} key={message.id} />)

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let newMessageElement = e.target.value;
        let text = newMessageElement;
        props.updateNewMessageText(text);
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
                            <textarea placeholder='Write smth here and tap to btn'
                                className={ui._area}
                                onChange={onMessageChange}
                                value={props.stateMessagesPage.newMessageText}
                            />
                        </div>
                        <div>
                            <button className={ui._btn} onClick={onAddMessage}>add message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//========================================================================================================================================================

export default Messages;
