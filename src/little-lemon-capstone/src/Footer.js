import FooterLogo from './Images/FooterPhoto.png';

function Footer() {
    return (
        <footer>
            <div className="grid">
                <div className="footerColumnOne">
                    <img src={FooterLogo} alt="Logo and title of the application." className="col-4"/>
                </div>
                <div className="footerColumnTwo">
                    <label className="sectionTitle">DOORMAT NAVIGATION</label>
                    <ul className="paragraphText">
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">About</a></li>
                        <li><a href="/#">Menu</a></li>
                        <li><a href="/#">Reservations</a></li>
                        <li><a href="/#">Order Online</a></li>
                        <li><a href="/#">Login</a></li>
                    </ul>
                </div>
                <div className="footerColumnThree">
                    <label className="sectionTitle">CONTACT</label>
                    <ul className="paragraphText">
                        <li><a href="/#">Address</a></li>
                        <li><a href="/#">Phone Number</a></li>
                        <li><a href="/#">Email</a></li>
                    </ul>
                </div>
                
                <div className="footerColumnFour">
                    <label className="sectionTitle">SOCIAL MEDIA LINKS</label>
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