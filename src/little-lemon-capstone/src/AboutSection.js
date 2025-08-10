import TitleImage from "./Images/TitleSectionFood.jpg";

function AboutSection() {
    return (
        <article id="about" className="">
            <div className="aboutArea">
                <div className="aboutContent">
                    <h3 className="secondaryDisplayTitle wrapTitle">Little Lemon</h3>
                    <h4 className="secondarySubTitle">Berkeley</h4>
                    <p className="paragraphText">
                        Little Lemon Chicago is a family owned Mediterranean restaurant located in the heart of the city. The restaurant is run by brothers Mario and Adrian, who have always had a passion for cooking and serving delicious food. Growing up in a Mediterranean household, the brothers were exposed to traditional recipes from an early age, and they decided to bring those recipes to the masses with a modern twist. At Little Lemon, you can expect to find a menu full of classic dishes with a creative twist that makes them stand out from the rest. Whether you're looking for a quick lunch or a leisurely dinner, Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.
                    </p>
                </div>
                <div className="aboutImageGallery tabletHide">
                    <img src={TitleImage} alt="Waiter holding kebabs" className="aboutPictureWrapperOne"/>
                    <img src={TitleImage} alt="Waiter holding kebabs" className="aboutPictureWrapperTwo"/>
                </div>
            </div>
        </article>
    );
}

export default AboutSection;