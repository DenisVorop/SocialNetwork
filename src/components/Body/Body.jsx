import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import './Body.scss';
import { Route, Routes } from 'react-router-dom';


const Body = (props) => {
    return (
        <div className="body">
            <div className="body__container">
                <div className="body__row">
                    <Navigation />
                    <Routes>
                        <Route path='/' element={<Profile stateProfilePage={props.statePages.stateProfilePage} />} />
                        <Route path='/profile' element={<Profile stateProfilePage={props.statePages.stateProfilePage} />} />
                        <Route path='/messages/*' element={<Messages stateMessagesPage={props.statePages.stateMessagesPage} />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Body;
