import React from 'react';

const TestimonialCard = ({testimonial}) => {
    var stars = () => {
        let starElements = [];
        for (let i = 0; i < 5; i++) {
            if (i < testimonial.rating) {
                starElements.push(<i className="bi bi-star-fill primaryYellow"></i>);
            } else {
                starElements.push(<i className="bi bi-star secondaryBlack"></i>);
            }
        }
        return starElements;
    }

    return (
        <div key={testimonial.id} className="testimonialRowTwo testimonialCard bounce-hover">
            <div className="testimonialCardHeader">
                <div className='testimonialPictureWrapper'>
                    <img src={testimonial.profileImage} alt={testimonial.fullName} />
                </div>
                <div className="">
                    <h4 className="">{testimonial.fullName}</h4>
                    <p className="">{testimonial.username}</p>
                </div>
            </div>
            <div className="testimonialStars">
                {stars().map((star, index) => (
                    <div key={index}>
                        {star}
                    </div>
                ))}
            </div>
            <p className="">"{testimonial.review}"</p>
        </div>
    );
};

export default TestimonialCard;