

function Nav() {
    return (
        <nav className="">
            <ul className="">
                <li className=""><a href="/#" className="highlightText">Home</a></li>
                <li className=""><a href="/About" className="highlightText ">About</a></li>
                <li className=""><a href="/Menu" className="highlightText">Menu</a></li>
                <li className=""><a href="/Reservations" className="highlightText">Reservations</a></li>
                <li className=""><a href="/Order" className="highlightText">Order Online</a></li>
                <li className=""><a href="/Login" className="highlightText">Login</a></li>
            </ul>
            <div className="mobileMenuToggle">
                {/* <i className="bi bi-list"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" className="bi bi-list" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
            
        </nav>
    );
}

export default Nav;