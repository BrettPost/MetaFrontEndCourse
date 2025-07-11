import Nav from './Nav.js';
import Logo from './Images/Logo.svg'

function Header() {
    return (
        <header className="">
            <div className="navLogoWrapper">
                <img src={Logo} alt="Logo and title of the application."/>
            </div>
            <Nav />
        </header>
    );
}

export default Header;