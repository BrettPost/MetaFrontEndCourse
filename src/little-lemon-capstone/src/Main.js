import HomePage from "./Pages/HomePage";
import ReserveTablePage from "./Pages/ReserveTablePage";
import { Routes, Route } from "react-router-dom";

function Main() {

    return (
        <main className="">
            <Routes> 
                <Route path="/" element={<HomePage />} />
                <Route path="/About" element={<></>} />
                <Route path="/Menu" element={<></>} />
                <Route path="/Reservations" element={
                    <ReserveTablePage />
                } />
                <Route path="/Order" element={<></>} />
                <Route path="/Login" element={<></>} />
            </Routes>
        </main>
    );
}

export default Main;