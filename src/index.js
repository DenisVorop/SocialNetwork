import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/state';

export let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={store.addPost.bind(store)}
                    addMessage={store.addMessage.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                    updateNewMessageText={store.updateNewMessageText.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reportWebVitals();

rerender(store.getState());

store.subscribe(rerender); // Передаем ф-цию rerender и отправляем subscribe в state.js
