import { connect } from 'react-redux';
import { addMessageActionCreator } from '../../../Redux/messagesReducer.ts';
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
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText));
        },
    }
}

//========================================================================================================================================================

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Messages);
