import TitleImage from "./Images/TitleSectionFood.jpg";

function TitleSection() {
    return (
        <article className="titleArea">
            <div className="grid">
                <div className="titleSectionColumnOne">
                    <div>
                        <h1 className="displayTitle">Little Lemon</h1>
                        <h2 className="subTitle">Berkeley</h2>
                        <p className="leadText">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button className="cardTitle">Reserve a Table</button>
                    </div>
                </div>
                <div className="titleSectionColumnTwo">
                    <div className="titlePictureWrapper">
                        <img src={TitleImage} alt="Waiter holding kebabs" className=""/>
                    </div>
                </div>
                
            </div>
            
        </article>
    );
}

export default TitleSection;