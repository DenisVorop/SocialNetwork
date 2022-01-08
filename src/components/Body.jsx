import Navigation from './Navigation';
import Profile from './Profile';

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