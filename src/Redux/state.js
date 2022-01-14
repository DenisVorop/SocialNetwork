//========================================================================================================================================================

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.stateProfilePage.newPostText, // В message добавляется то, что находится в newPostText
            };
            this._state.stateProfilePage.postData.push(newPost); // Добавляем пост
            this._state.stateProfilePage.newPostText = ''; // Очищаем поле ввода
            this._callSubscriber(this._state);// Обновляем страницу
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.stateProfilePage.newPostText = action.newText; // Добавляем в newPostText значение, которое приходит из newText
            this._callSubscriber(this._state); // Обновляем страницу
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.stateMessagesPage.newMessageText,
            };
            this._state.stateMessagesPage.messageData.push(newMessage);
            this._state.stateMessagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.stateMessagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}

//========================================================================================================================================================

export const addPostActionCreator = () => {
    return ({
        type: ADD_POST,
    })
}
export const updateNewPostTextActionCreator = (text) => {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    })
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

export default store;
