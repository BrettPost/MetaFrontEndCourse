import Restaurant from './Images/restaurant.jpg';

function Footer() {
    return (
        <footer>
            <img src={Restaurant} alt="Logo and title of the application." />
            <label>Doormat Navigation</label>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
            <label>Contact</label>
            <ul>
                <li><a>Address</a></li>
                <li><a>Phone Number</a></li>
                <li><a>Email</a></li>
            </ul>
            <label>Social Media Links</label>
            <ul>
                <li><a>Instagram</a></li>
                <li><a>Facebook</a></li>
                <li><a>X</a></li>
            </ul>
        </footer>
    );
}

export default Footer;