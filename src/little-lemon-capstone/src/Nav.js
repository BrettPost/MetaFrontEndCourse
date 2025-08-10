import React from 'react';
import MobileNavMenu from "./MobileNavMenu";

function Nav() {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    return (
        <nav className="">
            <ul className="mobileHide">
                <li className=""><a href="/#" className="highlightText">Home</a></li>
                <li className=""><a href="#about" className="highlightText ">About</a></li>
                <li className=""><a href="#menu" className="highlightText">Menu</a></li>
                <li className=""><a href="/Reservations" className="highlightText">Reservations</a></li>
                <li className=""><a href="#Order" className="highlightText">Order Online</a></li>
                <li className=""><a href="#Login" className="highlightText">Login</a></li>
            </ul>
            <div className="mobileMenuToggle" onClick={() => {setShowMobileMenu(!showMobileMenu);}} aria-label="Open Mobile Navigation Bar" >
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" className="bi bi-list" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
            {showMobileMenu && <MobileNavMenu />}
        </nav>
    );
}

export default Nav;