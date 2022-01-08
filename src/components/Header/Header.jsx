import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <div className="header__image"><img src="https://seeklogo.com/images/C/Coca-Cola-logo-108E6559A3-seeklogo.com.png"/></div>
                    <div className="header__name">Pepsi-Co</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
