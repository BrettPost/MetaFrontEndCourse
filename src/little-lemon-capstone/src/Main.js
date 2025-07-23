import HomePage from "./Pages/HomePage";
import ReserveTablePage from "./Pages/ReserveTablePage";
import { Routes, Route } from "react-router-dom";

function Main() {
    return (
        <main className="">
            <Routes> 
                <Route path="/" element={<HomePage />} />
                <Route path="/About" element={<></>}></Route>
                <Route path="/Menu" element={<></>}></Route>
                <Route path="/Reservations" element={<ReserveTablePage />}></Route>
                <Route path="/Order" element={<></>}></Route>
                <Route path="/Login" element={<></>}></Route>
            </Routes>
        </main>
    );
}

export default Main;