import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/messagesReducer';
import Messages from './Messages';

//========================================================================================================================================================

// const MessagesContainer = () => {

//     let addMessage = () => {
//         store.dispatch(addMessageActionCreator());
//     }

//     let MessageChange = (text) => {
//         let action = updateNewMessageTextActionCreator(text);
//         store.dispatch(action);
//     }
//     return (
//         <Messages
//             addMessage={addMessage}
//             updateNewMessageText={MessageChange}
//         />

//     )
// }

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
