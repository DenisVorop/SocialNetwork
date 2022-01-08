import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';
import './Body.scss';


const Body = () => {
    return (
        <div className="body">
            <div className="body__container">
                <div className="body__row">
                    <Navigation />
                    <Profile />
                </div>
            </div>
        </div>
    );
}

export default Body;
