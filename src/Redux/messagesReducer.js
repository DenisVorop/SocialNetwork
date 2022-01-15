const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

//========================================================================================================================================================

let initialState = {
    messageData: [
        { id: 1, message: 'Hello, my Dear friend!' },
        { id: 2, message: 'I want to say you' },
        { id: 3, message: 'That your message' },
        { id: 4, message: 'Make me happy!' },
    ],
    newMessageText: 'newMessageText',
    dialogData: [
        { id: 1, name: 'Darya' },
        { id: 2, name: 'Maksim' },
        { id: 3, name: 'Fuad' },
        { id: 4, name: 'Faig' },
        { id: 5, name: 'Anatolich' },
        { id: 6, name: 'Denis' },
    ],
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            let stateCopy = { ...state };
            stateCopy.messageData = [...state.messageData]
            stateCopy.messageData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default: return state;
    }
}

export const addMessageActionCreator = () => {
    return ({
        type: ADD_MESSAGE,
    })
}
export const updateNewMessageTextActionCreator = (text) => {
    return ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    })
}

//========================================================================================================================================================

export default messagesReducer;
