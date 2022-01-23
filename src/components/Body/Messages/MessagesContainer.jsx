import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/messagesReducer';
import Messages from './Messages';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

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

//========================================================================================================================================================

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Messages);
