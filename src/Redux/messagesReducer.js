const ADD_MESSAGE = 'ADD-MESSAGE';

//========================================================================================================================================================

let initialState = {
    messageData: [
        { id: 1, message: 'Hello, my Dear friend!' },
        { id: 2, message: 'I want to say you' },
        { id: 3, message: 'That your message' },
        { id: 4, message: 'Make me happy!' },
    ],
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
                message: action.newMessageText,
            };
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
            };
        }
        default: return state;
    }
}

export const addMessageActionCreator = (newMessageText) => {
    return ({
        type: ADD_MESSAGE,
        newMessageText: newMessageText,
    })
}

//========================================================================================================================================================

export default messagesReducer;
