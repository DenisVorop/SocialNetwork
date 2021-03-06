import Navigation from './Navigation/Navigation';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import './Body.scss';
import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Preloader from '../common/Preloader/Preloader';

//========================================================================================================================================================

const Login = lazy(() => import('./Login/Login'));
const ProfileContainer = lazy(() => import('./Profile/ProfileContainer'));
const Messages = lazy(() => import('./Messages/Messages.tsx'));
const UsersPage = lazy(() => import('./Users/UsersPage.tsx'));

const Body = () => {
    return (
        <div className="body">
            <div className="body__container">
                <div className="body__row">
                    <Navigation />
                    <Suspense fallback={<Preloader />}>
                        <Routes>
                            <Route path='/login'
                                element={<Login />} />
                            <Route path='/profile'
                                element={<ProfileContainer />}>
                                <Route path='/profile:userId'
                                    element={<ProfileContainer />} />
                            </Route>
                            <Route path='/messages/'
                                element={<Messages />} />
                            <Route path={'/users'}
                                element={<UsersPage />} />
                            <Route path='/news' element={<News />} />
                            <Route path='/music' element={<Music />} />
                            <Route path='/settings' element={<Settings />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

//========================================================================================================================================================

export default Body;
