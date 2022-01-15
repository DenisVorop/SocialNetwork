import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

//========================================================================================================================================================

let store = {
    _state: {
        stateProfilePage: {
            postData: [
                { id: 1, message: 'My first post' },
                { id: 2, message: 'My second post' },
                { id: 3, message: 'My third post' },
            ],
            newPostText: 'newPostText',
        },
        stateMessagesPage: {
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
        },
    },
    _callSubscriber() { // Находим ф-цию rerender и присваеваем ей observer, в котором rerender из index.js
    },

    //========================================================================================================================================================

    getState() { // Создали, чтобы не обращаться напрямую к _state (_ подразумевает запрет на прямое обращение)
        return this._state;
    },
    subscribe(observer) { // получаем rerender из index.js
        this._callSubscriber = observer; // выпрыгиваем из ф-ции в поисках rerender, присваем rerender из index.js в rerender из state.js через observer
        // Наблюдатель (паттерн - observer)
    },

    //========================================================================================================================================================

    dispatch(action) { // action - object
        this._state.stateProfilePage = profileReducer(this._state.stateProfilePage, action)
        this._state.stateMessagesPage = messagesReducer(this._state.stateMessagesPage, action)

        this._callSubscriber(this._state);
    }
}

//========================================================================================================================================================


//========================================================================================================================================================

export default store;
