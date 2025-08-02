import React from 'react';

function ReserveForm() {

    const [reservation, setReservations] = React.useState([]);
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        scheduleDate: '',
        scheduleTime: '',
        numOfGuests: '',
        occasion: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [id]: value,
        }));
      };

    var scheduleTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    const handleSubmit = (e) => {
        e.preventDefault();
        setReservations((prevReservations) => [...prevReservations, formData]);
        setFormData({
            firstName: '',
            lastName: '',
            scheduleDate: '',
            scheduleTime: '',
            numOfGuests: '',
            occasion: ''
        }); // Reset form
      };

    return (
        <>
            <div className='pageLayout'>
                <form onSubmit={handleSubmit}>
                    <h1>Reserve a Table</h1>
                    <div>
                        <label htmlFor="firstName" className="sectionCategories">First Name</label>
                        <input type="text" id="firstName"  placeholder="First Name" onChange={handleChange} value={formData.firstName} />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="sectionCategories">Last Name</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} />
                    </div>
                    <div>
                        <label htmlFor="scheduleDate" className="sectionCategories">Choose Date</label>
                        <input id="scheduleDate" name="scheduleDate" type="date" onChange={handleChange} value={formData.scheduleDate}/>
                    </div>
                    <div>
                        <label htmlFor="scheduleTime" className="sectionCategories">Choose Time</label>
                        <select id="scheduleTime" name="scheduleTime" onChange={handleChange} value={formData.scheduleTime}>
                            <option name={formData.scheduleTime} value={formData.scheduleDate}>Select a Time</option>
                            {scheduleTimes.map((x, id) => <option key={id}>{x}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="numOfGuests" className="sectionCategories">Amount of Guests</label>
                        <input type="text" id="numOfGuests" name="numOfGuests" placeholder="1, 2, 3..." onChange={handleChange} value={formData.numOfGuests} />
                    </div>
                    <div>
                        <label htmlFor="occasion" className="sectionCategories">Occasion</label>
                        <input type="text" id="occasion" name="occasion" placeholder="Birthday..." onChange={handleChange} value={formData.occasion} />
                    </div>
                    <button type="submit" className="cardTitle">Reserve</button>
                </form>
                <div className='testimonial-grid'>
                    {reservation.map((r, index) => (
                        <article className='reservation' key={index}>
                            <h4 className='sectionCategories'>Reservation {index + 1}</h4>
                            <div>
                                <p className='paragraphText'><b>Name:</b> {r.firstName} {r.lastName}</p>
                                <p className='paragraphText'><b>Date:</b> {r.scheduleDate}</p>
                                <p className='paragraphText'><b>Time:</b> {r.scheduleTime}</p>
                                <p className='paragraphText'><b>Guests:</b> {r.numOfGuests}</p>
                                <p className='paragraphText'><b>Occasion:</b> {r.occasion}</p>
                            </div>
                        </article>
                    ))}  
                </div>
            </div>
                   
        </>
    );
}

export default ReserveForm;