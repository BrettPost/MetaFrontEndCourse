import Nav from './Nav.js';
import Logo from './Images/Logo.svg'

function Header() {
    return (
        <header className="grid">
            <img src={Logo} alt="Logo and title of the application." className="col-4"/>
            <Nav />
        </header>
    );
}

export default Header;