import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/messagesReducer';
import Messages from './Messages';

//========================================================================================================================================================

const MessagesContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let MessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Messages
        addMessage={addMessage}
        updateNewMessageText={MessageChange}
        stateMessagesPage={state.stateMessagesPage}
        />
    );
}

//========================================================================================================================================================

export default MessagesContainer;
