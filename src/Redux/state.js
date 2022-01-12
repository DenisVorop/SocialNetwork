import { rerender } from "../render";

let state = {
    stateProfilePage: {
        postData: [
            { id: 1, message: 'My first post' },
            { id: 2, message: 'My second post' },
            { id: 3, message: 'My third post' },
        ],
    },
    stateMessagesPage: {
        messageData: [
            { id: 1, message: 'Hello, my Dear friend!' },
            { id: 2, message: 'I want to say you' },
            { id: 3, message: 'That your message' },
            { id: 4, message: 'Can help me' },
        ],
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

export let addPost = (Post) => {
    let newPost = {
        id: 4,
        message: Post,
    };

    state.stateProfilePage.postData.push(newPost);
    rerender(state);
}

export let addMessage = (Message) => {
    let newMessage = {
        id: 5,
        message: Message,
    }

    state.stateMessagesPage.messageData.push(newMessage);
    rerender(state);
}

export default state;
