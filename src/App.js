// ------------------------------------
import './scss/null.scss';
import './scss/ui.module.scss';
import './App.scss';

// ------------------------------------
import Header from './components/Header/Header';
import Body from './components/Body/Body';

// ------------------------------------
import { BrowserRouter } from 'react-router-dom';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header />
                <main className='page'>
                    <Body statePages={props.state} />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
