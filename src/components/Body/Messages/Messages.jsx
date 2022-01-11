import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import './Messages.scss'

const Messages = (props) => {
    let dialogsElements =
        props.stateMessagesPage.dialogData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)

    let messagesElements =
        props.stateMessagesPage.messageData.map(message => <Message textMessage={message.message} />)

    return (
        <div className="body__messages messages-body">
            <div className="messages-body__dialogs">
                {dialogsElements}
            </div>
            <div className="messages-body__messages">
                {messagesElements}
            </div>
        </div>
    );
}

export default Messages;
