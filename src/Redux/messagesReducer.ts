// import { messageType, dialogType } from './../types/Types';

// //========================================================================================================================================================

// const ADD_MESSAGE = 'messagesReducer/ADD_MESSAGE';

// //========================================================================================================================================================

// let initialState = {
//     messageData: [
//         { id: 1, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor suscipit vitae iste! Dolor earum sint quae modi voluptatibus minus corrupti.' },
//         { id: 2, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam id animi eius. Repellat laboriosam nam, aspernatur dicta quia aperiam sit! A quidem veritatis incidunt in. Esse omnis itaque sequi eaque officiis odio officia? Numquam natus quis cum magnam. Tempore maxime molestiae quis officia voluptas at reiciendis expedita ducimus id rerum. Cum odio quisquam corporis?' },
//         { id: 3, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, labore.' },
//         { id: 4, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, similique et. Impedit saepe possimus laboriosam repellendus voluptatem harum est! Minus.' },
//     ] as Array<messageType>,
//     dialogData: [
//         { id: 1, name: 'Darya' },
//         { id: 2, name: 'Maksim' },
//         { id: 3, name: 'Fuad' },
//         { id: 4, name: 'Faig' },
//         { id: 5, name: 'Anatolich' },
//         { id: 6, name: 'Denis' },
//     ] as Array<dialogType>,
// }

// export type initialStateType = typeof initialState;

// type ActionTypes = addMessageActionCreatorType

// const messagesReducer = (state = initialState, action: ActionTypes): initialStateType => {
//     switch (action.type) {
//         case ADD_MESSAGE: {
//             let newMessage = {
//                 id: 5,
//                 message: action.newMessageText,
//             };
//             return {
//                 ...state,
//                 messageData: [...state.messageData, newMessage],
//             };
//         }
//         default: return state;
//     }
// }

// type addMessageActionCreatorType = {
//     type: typeof ADD_MESSAGE
//     newMessageText: string
// }
// export const addMessageActionCreator = (newMessageText: string): addMessageActionCreatorType => {
//     return ({
//         type: ADD_MESSAGE,
//         newMessageText: newMessageText,
//     })
// }

// //========================================================================================================================================================

// export default messagesReducer;
