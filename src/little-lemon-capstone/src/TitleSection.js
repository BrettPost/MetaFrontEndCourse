import TitleImage from "./Images/TitleSectionFood.jpg";
import { Link } from 'react-router-dom';

function TitleSection() {
    return (
        <article className="titleArea">
            <div className="grid">
                <div className="titleSectionColumnOne">
                    <div>
                        <h1 className="displayTitle wrapTitle">Little Lemon</h1>
                        <h2 className="subTitle">Berkeley</h2>
                        <p className="leadText">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Link to="/Reservations">
                            <button className="cardTitle">Reserve a Table</button>
                        </Link>
                    </div>
                </div>
                <div className="titleSectionColumnTwo">
                    <div className="titlePictureWrapper tabletHide">
                        <img src={TitleImage} alt="Waiter holding kebabs" className=""/>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default TitleSection;