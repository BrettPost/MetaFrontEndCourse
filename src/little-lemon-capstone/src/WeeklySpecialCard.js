import React from 'react';

const WeeklySpecialCard = ({special}) => {
    return (
        <div key={special.id} className="weeklySpecialCard">
            <div className='weeklyPictureWrapper'>
                <img src={special.image} alt={special.name} />
            </div>
            <div className='cardHeader'>
                <h3 className="weeklySpecialName">{special.name}</h3>
                <p className="weeklySpecialPrice">{special.price}</p>
            </div>
            <p className="cardDescription">{special.description}</p>
            <p className="cardAction">Order a delivery <span className="material-symbols-outlined">room_service</span></p>
            
        </div>
    );
};

export default WeeklySpecialCard;