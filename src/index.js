import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store';

//========================================================================================================================================================

export let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

//========================================================================================================================================================

reportWebVitals();

rerender(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerender(state);
}); // Передаем ф-цию rerender и отправляем subscribe в state.js
