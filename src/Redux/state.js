import { rerender } from "../render";

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.stateProfilePage.newPostText,
    };

    state.stateProfilePage.postData.push(newPost);
    state.stateProfilePage.newPostText = '';
    rerender(state);
}

export let updateNewPostText = (newText) => {
    state.stateProfilePage.newPostText = newText;
    rerender(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.stateMessagesPage.newMessageText,
    };

    state.stateMessagesPage.messageData.push(newMessage);
    state.stateMessagesPage.newMessageText = '';
    rerender(state);
}

export let updateNewMessageText = (newText) => {
    state.stateMessagesPage.newMessageText = newText;
    rerender(state);
}

export default state;
