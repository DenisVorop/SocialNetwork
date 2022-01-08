import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <div className="header__image"><img src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg"/></div>
                    <div className="header__name">DenisVorop</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
