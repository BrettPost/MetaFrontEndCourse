import TestimonialCard from "./TestimonialCard";

function TestimonialSection() {
    const testimonials = [
        {
            id: 1,
            fullName: "John Doe",
            username: "johndoe123",
            profileImage: "/images/john.jpg",
            rating: 5,
            review: "Amazing service! The food was delicious and the staff was very friendly."
        },
        {
            id: 2,
            fullName: "Jane Smith",
            username: "janesmith456",
            profileImage: "/images/jane.jpg",
            rating: 4,
            review: "Great experience overall. The ambiance was lovely, but the wait time was a bit long."
        },
        {
            id: 3,
            fullName: "Michael Brown",
            username: "mikebrown789",
            profileImage: "/images/michael.jpg",
            rating: 5,
            review: "Absolutely fantastic! Highly recommend to anyone looking for a great dining experience."
        },
        {
            id: 4,
            fullName: "Emily Davis",
            username: "emilydavis101",
            profileImage: "/images/emily.jpg",
            rating: 4,
            review: "The food was great, but the dessert stole the show! Will definitely come back."
        },
        {
            id: 5,
            fullName: "Chris Wilson",
            username: "chriswilson202",
            profileImage: "/images/chris.jpg",
            rating: 3,
            review: "Good food, but the service could use some improvement. Overall, a decent experience."
        }
    ];

    return (
        <article className="testimonialArea">
            <div className="grid">
                <h2 className="subTitle secondaryBlack testimonialRowOne">What Do Our Customers Think?</h2>
                <div>
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </article>
    );
}

export default TestimonialSection;