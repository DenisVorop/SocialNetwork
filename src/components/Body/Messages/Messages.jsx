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

const Messages = () => {
    return (
        <div className="body__messages messages-body">
            <div className="messages-body__dialogs">
                <Dialog name='Darya' id='Darya'/>
                <Dialog name='Maksim' id='Maksim'/>
                <Dialog name='Fuad' id='Fuad'/>
                <Dialog name='Faig' id='Faig'/>
                <Dialog name='Anatolich' id='Anatolich'/>
                <Dialog name='Denis' id='Denis'/>
            </div>
            <div className="messages-body__messages">
                <Message textMessage='Hello, my Dear friend!'/>
                <Message textMessage='I want to say you'/>
                <Message textMessage='That your message'/>
                <Message textMessage='Can help me'/>
            </div>
        </div>
    );
}

export default Messages;
