import TestimonialCard from "./TestimonialCard";
// import WeeklySpecialCard from "./WeeklySpecialCard";
import GreekSalad from "./Images/greekSalad.jpg";
// import Bruschetta from "./Images/bruschetta.svg";
// import LemonDessert from "./Images/lemonDessert.jpg";

function TestimonialSection() {
    const testimonials = [
        {
            id: 1,
            fullName: "John Doe",
            username: "johndoe123",
            profileImage: GreekSalad, //john.jpg
            rating: 5,
            review: "Amazing service! The food was delicious and the staff was very friendly."
        },
        {
            id: 2,
            fullName: "Jane Smith",
            username: "janesmith456",
            profileImage: GreekSalad, //jane.jpg
            rating: 4,
            review: "Great experience overall. The ambiance was lovely, but the wait time was a bit long."
        },
        {
            id: 3,
            fullName: "Michael Brown",
            username: "mikebrown789",
            profileImage: GreekSalad, //mike.jpg
            rating: 5,
            review: "Absolutely fantastic! Highly recommend to anyone looking for a great dining experience."
        },
        {
            id: 4,
            fullName: "Emily Davis",
            username: "emilydavis101",
            profileImage: GreekSalad, //emily.jpg
            rating: 4,
            review: "The food was great, but the dessert stole the show! Will definitely come back."
        },
        {
            id: 5,
            fullName: "Chris Wilson",
            username: "chriswilson202",
            profileImage: GreekSalad, //chris.jpg
            rating: 3,
            review: "Good food, but the service could use some improvement. Overall, a decent experience."
        }
    ];

    return (
        <article className="testimonialArea">
            <h2 className="subTitle secondaryBlack testimonialTitle">What Do Our Customers Think?</h2>
            <div className="testimonial-grid testimonialReviews">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </article>
    );
}

export default TestimonialSection;