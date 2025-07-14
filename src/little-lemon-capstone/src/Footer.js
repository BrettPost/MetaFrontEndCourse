import FooterLogo from './Images/FooterPhoto.png';

function Footer() {
    return (
        <footer>
            <div className="footerContent">
                <div className="">
                    <img src={FooterLogo} alt="Logo and title of the application." className="col-4"/>
                </div>
                <div className="">
                    <label className="highlightText">DOORMAT NAVIGATION</label>
                    <ul className="paragraphText">
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">About</a></li>
                        <li><a href="/#">Menu</a></li>
                        <li><a href="/#">Reservations</a></li>
                        <li><a href="/#">Order Online</a></li>
                        <li><a href="/#">Login</a></li>
                    </ul>
                </div>
                <div className="">
                    <label className="highlightText">CONTACT</label>
                    <ul className="paragraphText">
                        <li><a href="/#">Address</a></li>
                        <li><a href="/#">Phone Number</a></li>
                        <li><a href="/#">Email</a></li>
                    </ul>
                </div>
                
                <div className="">
                    <label className="highlightText">SOCIAL MEDIA LINKS</label>
                    <ul className="paragraphText">
                        <li><a href="/#">Instagram</a></li>
                        <li><a href="/#">Facebook</a></li>
                        <li><a href="/#">X</a></li>
                    </ul>
                </div>
                
            </div>
            
            
            
        </footer>
    );
}

export default Footer;