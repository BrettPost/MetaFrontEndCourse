import TitleImage from "./Images/TitleSectionFood.jpg";
import WeeklySpecialCard from "./WeeklySpecialCard";
import GreekSalad from "./Images/greekSalad.jpg";
import Bruschetta from "./Images/bruschetta.svg";
import LemonDessert from "./Images/lemonDessert.jpg";

function WeeklySpecials() {
    const specials = [
        {
            id: 1,
            name: "Greek Salad",
            price: "$12.99",
            description: "A delicious salad with fresh vegetables and feta cheese.",
            image: GreekSalad,
        },
        {
            id: 2,
            name: "Bruschetta",
            price: "$5.99",
            description: "Toasted bread topped with tomatoes, garlic, and basil.",
            image: Bruschetta,
        },
        {
            id: 3,
            name: "Lemon Dessert",
            price: "$5.00",
            description: "A refreshing lemon dessert to end your meal.",
            image: LemonDessert,
        },
    ];

    return (
        <article className="weeklySpecialsArea">
            <div className="grid">
                <div className="weeklySpecialSectionColumnOne">
                    <h2 className="secondaryBlack">This Week's Specials!</h2>
                </div>
                <div className="weeklySpecialSectionColumnTwo">
                    <button className="cardTitle">Online Menu</button>
                </div>
            </div>
            <div className="weekly-specials-grid">
                {specials.map((special) => (
                    <WeeklySpecialCard key={special.id} special={special} />
                ))}
            </div>
            
        </article>
    );
}

export default WeeklySpecials;