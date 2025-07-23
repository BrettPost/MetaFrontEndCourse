function MobileNavMenu() {
    return (
        <div className="mobileNavMenu">
            <ul className="">
                <li className=""><a href="/#" className="highlightText">Home</a></li>
                <li className=""><a href="/About" className="highlightText ">About</a></li>
                <li className=""><a href="/Menu" className="highlightText">Menu</a></li>
                <li className=""><a href="/Reservations" className="highlightText">Reservations</a></li>
                <li className=""><a href="/Order" className="highlightText">Order Online</a></li>
                <li className=""><a href="/Login" className="highlightText">Login</a></li>
            </ul>
        </div>
    );
}

export default MobileNavMenu;