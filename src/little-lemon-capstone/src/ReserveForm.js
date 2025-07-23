
function ReserveForm() {
    return (
        <form>
            <h1>Reserve a Table</h1>
            <div>
                <label htmlFor="firstName" className="sectionCategories">First Name</label>
                <input name="firstName" type="text" placeholder="First Name" />
            </div>
            <div>
                <label className="sectionCategories">Last Name</label>
                <input type="text" placeholder="Last Name" />
            </div>
            <div>
                <label className="sectionCategories">Choose Date</label>
                <input type="date" />
            </div>
            <div>
                <label className="sectionCategories">Choose Time</label>
                <input type="time"/>
            </div>
            <div>
                <label className="sectionCategories">Amount of Guests</label>
                <input type="text" placeholder="1, 2, 3..." />
            </div>
            <div>
                <label className="sectionCategories">Occasion</label>
                <input type="text" placeholder="Birthday..." />
            </div>
            <button type="submit" className="cardTitle">Reserve</button>
        </form>
    );
}

export default ReserveForm;