// ------------------------------------
import './scss/null.scss';
import './scss/ui.module.scss';
import './App.scss';

// ------------------------------------
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { rerender } from './render';

// ------------------------------------

const App = (props) => {
    return (
        <div className='wrapper'>
            <Header />
            <main className='page'>
                <Body statePages={props.state} addPost={props.addPost} addMessage={props.addMessage} />
            </main>
        </div>
    );
}

export default App;
