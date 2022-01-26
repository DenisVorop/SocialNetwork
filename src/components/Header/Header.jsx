import { NavLink } from 'react-router-dom';
import './Header.scss';
import ui from '../../scss/ui.module.scss';

//========================================================================================================================================================

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <div className="header__image"><img src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg" /></div>
                    <div className="header__name">DenisVorop</div>
                </div>
                <div className="header__auth">
                    {props.isAuth
                        ? <div>
                            {props.login} - <button className={ui._btn} onClick={props.logout}>Log Out</button>
                        </div>
                        : <NavLink to='/login'>Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

//========================================================================================================================================================

export default Header;
