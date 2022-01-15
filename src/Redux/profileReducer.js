const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

//========================================================================================================================================================

let initialState = {
    postData: [
        { id: 1, message: 'My first post' },
        { id: 2, message: 'My second post' },
        { id: 3, message: 'My third post' },
    ],
    newPostText: 'newPostText',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText, // В message добавляется то, что находится в newPostText
            };
            state.postData.push(newPost); // Добавляем пост
            state.newPostText = ''; // Очищаем поле ввода
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText; // Добавляем в newPostText значение, которое приходит из newText
            return state;
        default: return state;

    }
}

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

//========================================================================================================================================================

export default profileReducer;
