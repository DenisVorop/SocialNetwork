import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/messagesReducer';
import Messages from './Messages';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

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

let AuthRedirectComponent = withAuthRedirect(Messages);

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

//========================================================================================================================================================

export default MessagesContainer;
