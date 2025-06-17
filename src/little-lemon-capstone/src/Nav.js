

function Nav() {
    return (
        <nav className="">
            <ul className="">
                <li className=""><a href="/#" className="cardTitle secondaryBlack">Home</a></li>
                <li className=""><a href="/About" className="cardTitle secondaryBlack">About</a></li>
                <li className=""><a href="/Menu" className="cardTitle secondaryBlack">Menu</a></li>
                <li className=""><a href="/Reservations" className="cardTitle secondaryBlack">Reservations</a></li>
                <li className=""><a href="/Order" className="cardTitle secondaryBlack">Order Online</a></li>
                <li className=""><a href="/Login" className="cardTitle secondaryBlack">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;