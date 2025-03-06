import TitleImage from "./Images/TitleSectionFood.jpg";

function TitleSection() {
    return (
        <article className="titleArea">
            <div className="grid">
                <div className="titleSectionColumnOne">
                    <h1 className="displayTitle primaryYellow">Little Lemon</h1>
                    <h2 className="subTitle secondaryWhite">Berkeley</h2>
                    <p className="leadText secondaryWhite">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Reserve a Table</button>
                </div>
                <img src={TitleImage} alt="Waiter holding kebabs" className="titleSectionColumnTwo"/>
            </div>
            
        </article>
    );
}

export default TitleSection;