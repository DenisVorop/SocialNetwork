import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import ui from '../../../scss/ui.module.scss';

//========================================================================================================================================================

const Navigation = () => {
    return (
        <div className="body__navigation navigation-body">
            <ul className="navigation-body__list">
                <NavLink to="/profile" className = { navData => navData.isActive ? ui.nav_active : ui.nav }><li className="navigation-body__link">Profile</li></NavLink>
                <NavLink to="/messages" className = { navData => navData.isActive ? ui.nav_active : ui.nav }><li className="navigation-body__link">Messages</li></NavLink>
                <NavLink to="/news" className = { navData => navData.isActive ? ui.nav_active : ui.nav }><li className="navigation-body__link">News</li></NavLink>
                <NavLink to="/music" className = { navData => navData.isActive ? ui.nav_active : ui.nav }><li className="navigation-body__link">Music</li></NavLink>
                <NavLink to="/settings" className = { navData => navData.isActive ? ui.nav_active : ui.nav }><li className="navigation-body__link">Settings</li></NavLink>
            </ul>
        </div>
    );
}

export default Navigation;
