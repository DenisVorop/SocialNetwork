import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import ui from '../../../scss/ui.module.scss';
import React from 'react';

//========================================================================================================================================================

const Navigation = () => {
    return (
        <div className="body__navigation navigation-body">
            <ul className="navigation-body__list">
                <NavLink to="/profile" className = { navData => navData.isActive ? ui.nav_active : ui.nav }><li className={ui._btn}>Profile</li></NavLink>
                <NavLink to="/messages" className = { navData => navData.isActive ? ui.nav_active : ui.nav }><li className={ui._btn}>Messages</li></NavLink>
                <NavLink to="/users" className = { navData => navData.isActive ? ui.nav_active : ui.nav }><li className={ui._btn}>Users</li></NavLink>
                <NavLink to="/news" className = { navData => navData.isActive ? ui.nav_active : ui.nav }><li className={ui._btn}>News</li></NavLink>
                <NavLink to="/music" className = { navData => navData.isActive ? ui.nav_active : ui.nav }><li className={ui._btn}>Music</li></NavLink>
                <NavLink to="/settings" className = { navData => navData.isActive ? ui.nav_active : ui.nav }><li className={ui._btn}>Settings</li></NavLink>
            </ul>
        </div>
    );
}

//========================================================================================================================================================

export default Navigation;
