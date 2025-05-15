import React from 'react';

const TestimonialCard = ({testimonial}) => {
    return (
        <div key={testimonial.id} className="weeklySpecialCard">
            <div className='picture-wrapper'>
                <img src={testimonial.profileImage} alt={testimonial.fullName} />
            </div>
            <div className='cardHeader'>
                <h3 className="weeklySpecialName">{testimonial.fullName}</h3>
                <p className="weeklySpecialPrice">{testimonial.rating}</p>
            </div>
            <p className="cardDescription">{testimonial.review}</p>
            <p className="cardAction">Order a delivery <span class="material-symbols-outlined">room_service</span></p>
            
        </div>
    );
};

export default TestimonialCard;