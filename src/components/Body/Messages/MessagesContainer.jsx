import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/messagesReducer';
import Messages from './Messages';

//========================================================================================================================================================

let mapStateToProps = (state) => {
    return {
        stateMessagesPage: state.stateMessagesPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        },
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

//========================================================================================================================================================

export default MessagesContainer;
