import React from 'react';

const WeeklySpecialCard = ({special}) => {
    return (
        <div key={special.id} className="weeklySpecialCard">
            <img src={special.image} alt={special.name} />
            
            <h3 className="weeklySpecialName">{special.name}</h3>
            <p className="weeklySpecialPrice">{special.price}</p>
            <p className="weeklySpecialDescription">{special.description}</p>
        </div>
    );
};

export default WeeklySpecialCard;