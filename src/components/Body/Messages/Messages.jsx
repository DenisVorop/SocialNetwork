import { NavLink } from 'react-router-dom';
import './Messages.scss'
// import ui from '../../../scss/ui.module.scss';


const Dialog = (props) => {
    let path = '/messages/' + props.id;

    return (
        <div className="messages-body__dialog">
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className="messages-body__message">
            {props.textMessage}
        </div>
    );
}

let dialogData = [
    { id: 1, name: 'Darya' },
    { id: 2, name: 'Maksim' },
    { id: 3, name: 'Fuad' },
    { id: 4, name: 'Faig' },
    { id: 5, name: 'Anatolich' },
    { id: 6, name: 'Denis' },
]

let messageData = [
    { id: 1, message: 'Hello, my Dear friend!' },
    { id: 2, message: 'I want to say you' },
    { id: 3, message: 'That your message' },
    { id: 4, message: 'Can help me' },
]

let dialogsElements = dialogData
    .map( dialog => <Dialog name={dialog.name} id={dialog.id} />)

let messagesElements = messageData
    .map( message => <Message textMessage={message.message} />)

const Messages = () => {
    return (
        <div className="body__messages messages-body">
            <div className="messages-body__dialogs">
                { dialogsElements }
            </div>
            <div className="messages-body__messages">
                { messagesElements }
            </div>
        </div>
    );
}

export default Messages;
