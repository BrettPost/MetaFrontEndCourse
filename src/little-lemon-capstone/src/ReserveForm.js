import {useState, useEffect} from 'react';
import {fetchAPI, submitAPI} from './jsonFunctions/api.js';
import ReservationConfirmation from './Components/ReservationConfirmation.js';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validDate = () => {
    let date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
}
const reservationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    scheduleDate: Yup.date().typeError("Must be a valid date").min(validDate(), 'Please choose today\'s date or a future date.').required("Required"),
    scheduleTime: Yup.string().matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Must be a valid time. Make sure date field is selected first.").required("Required"),
    numOfGuests: Yup.number().typeError("Must be a number").min(1, "Must be at least 1 guest.").required("Required"),
    occasion: Yup.string().notRequired(),
})

function ReserveForm() {

    const [isConfirmed, setIsConfirmed] = useState(false);
    const [scheduleTimes, setScheduleTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const [reservation, setReservations] = useState([]);
    const { register, watch, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(reservationSchema),
        mode: "onBlur",
        defaultValues: {
            firstName: "",
            lastName: "",
            scheduleDate: "",
            scheduleTime: "",
            numOfGuests: "",
            occasion: "",
        },
    });

    const watchScheduleDate = watch("scheduleDate");

    const onSubmit = async (data) => {
        //e.preventDefault();
        if (submitAPI()) {
            confirmationMessage();
            setReservations((prevReservations) => [...prevReservations, data]);
            reset();
        } else {
            console.log("Error on submission.")
        }
      };

    async function confirmationMessage() {
        setIsConfirmed(true);
        await sleep(10000);
        setIsConfirmed(false);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        try {
            var times = fetchAPI(watchScheduleDate);
            setScheduleTimes(times);
        } catch (error) {
            console.log(error);
        }
    }, [watchScheduleDate]);

    return (
        <>
            <div className='pageLayout'>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <h1>Reserve a Table</h1>
                    <div>
                        <label htmlFor="firstName" className="sectionCategories">First Name</label>
                        <input type="text" id="firstName" placeholder="First Name"  {...register("firstName")} aria-invalid={!!errors.firstName}/>
                        {errors.firstName && <small style={{ color: "crimson" }}>{errors.firstName.message}</small>}
                    </div>
                    <div>
                        <label htmlFor="lastName" className="sectionCategories">Last Name</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Last Name"  {...register("lastName")} aria-invalid={!!errors.lastName}/>
                        {errors.lastName && <small style={{ color: "crimson" }}>{errors.lastName.message}</small>}
                    </div>
                    <div>
                        <label htmlFor="scheduleDate" className="sectionCategories">Choose Date</label>
                        <input id="scheduleDate" name="scheduleDate" type="date"  {...register("scheduleDate")} aria-invalid={!!errors.scheduleDate}/>
                        {errors.scheduleDate && <small style={{ color: "crimson" }}>{errors.scheduleDate.message}</small>}
                    </div>
                    <div>
                        <label htmlFor="scheduleTime" className="sectionCategories">Choose Time</label>
                        <select id="scheduleTime" name="scheduleTime" {...register("scheduleTime")} aria-invalid={!!errors.scheduleTime}>
                            <option >Select a Time</option>
                            {scheduleTimes.map((x, id) => <option key={id}>{x}</option>)}
                        </select>
                        {errors.scheduleTime && <small style={{ color: "crimson" }}>{errors.scheduleTime.message}</small>}
                    </div>
                    <div>
                        <label htmlFor="numOfGuests" className="sectionCategories">Amount of Guests</label>
                        <input type="number" id="numOfGuests" name="numOfGuests" placeholder="1, 2, 3..."  {...register("numOfGuests")} aria-invalid={!!errors.numOfGuests}/>
                        {errors.numOfGuests && <small style={{ color: "crimson" }}>{errors.numOfGuests.message}</small>}
                    </div>
                    <div>
                        <label htmlFor="occasion" className="sectionCategories">Occasion</label>
                        <input type="text" id="occasion" name="occasion" placeholder="Birthday..."  {...register("occasion")} aria-invalid={!!errors.occasion}/>
                        {errors.occasion && <small style={{ color: "crimson" }}>{errors.occasion.message}</small>}
                    </div>
                    <button type="submit" data-testid="reserveTable" className="cardTitle" aria-label="Confirm Reservation">Reserve</button>
                </form>
                <div className='testimonial-grid'>
                    {reservation.map((r, index) => (
                        <article className='reservation' key={index} data-testid="reservation">
                            <h4 className='sectionCategories'>Reservation {index + 1}</h4>
                            <div>
                                <p className='paragraphText'><b>Name:</b> {r.firstName} {r.lastName}</p>
                                <p className='paragraphText'><b>Date:</b> {new Date(r.scheduleDate).toLocaleDateString()}</p>
                                <p className='paragraphText'><b>Time:</b> {r.scheduleTime}</p>
                                <p className='paragraphText'><b>Guests:</b> {r.numOfGuests}</p>
                                <p className='paragraphText'><b>Occasion:</b> {r.occasion}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            {isConfirmed && <ReservationConfirmation />}
        </>
    );
}

export default ReserveForm;