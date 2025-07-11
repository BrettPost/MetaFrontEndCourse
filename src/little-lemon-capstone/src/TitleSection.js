import TitleImage from "./Images/TitleSectionFood.jpg";

function TitleSection() {
    return (
        <article className="titleArea">
            <div className="grid">
                <div className="titleSectionColumnOne">
                    <div>
                        <h1 className="displayTitle primaryYellow">Little Lemon</h1>
                        <h2 className="subTitle secondaryWhite">Berkeley</h2>
                        <p className="leadText secondaryWhite">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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