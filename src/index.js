import state, { subscribe } from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './Redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    addMessage={addMessage}
                    updateNewPostText={updateNewPostText}
                    updateNewMessageText={updateNewMessageText} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reportWebVitals();

rerender(state);

subscribe(rerender); // Передаем ф-цию rerender и отправляем subscribe в state.js
