import { NavLink } from 'react-router-dom';
import './Header.scss';
// import ui from '../../scss/ui.module.scss';
import React from 'react';
import logout from '../../assets/images/logout.svg'
//========================================================================================================================================================

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <div className="header__image"><img src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg" /></div>
                    <div className="header__name">Yok-Makarek</div>
                </div>
                <div className="header__auth">
                    {props.isAuth
                        ? <div className='header__log'>
                            <div>
                                {props.login}
                            </div>
                            <div>
                                -
                            </div>
                            <div className='header__person'>
                                <button onClick={props.logout}>
                                    <img src={logout} alt="logout" />
                                </button>
                            </div>
                        </div>
                        : <NavLink to='/login'>Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

//========================================================================================================================================================

export default Header;
