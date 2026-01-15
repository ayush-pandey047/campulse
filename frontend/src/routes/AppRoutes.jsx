import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login.jsx";
import Signup from "../pages/auth/signup.jsx";
import ForgetPassword from "../pages/auth/forgetpass.jsx";
import FacultyDashoard from "../pages/faculty/fasdash.jsx";
import FacultyCalander from "../pages/faculty/faccal.jsx";
import StudentDashboard from "../pages/student/studash.jsx";
import StudentCalender from "../pages/student/studcal.jsx";
import ClubDash from "../pages/clubinch/clubdash.jsx";
import ClubCalender from "../pages/clubinch/clubcal.jsx";

export default function AppRoute(){
    return(
        <BrowserRouter>
          <Routes>
            /** THIS IS FOR AUTH CONECTNG*/
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/forgetpassword" element={<ForgetPassword/>}/>

            /** THIS IS FOR Faculty CONECTNG*/
            <Route path="/facultydashboard" element={<FacultyDashoard/>}/>
            <Route path="/facultycalender" element={<FacultyCalander/>}/>

            /** THIS IS FOR Student CONECTNG*/
            <Route path="/studentdashboard" element={<StudentDashboard/>}/>
            <Route path="/studentcalender" element={<StudentCalender/>}/>

            /** THIS IS FOR ClubInc CONECTNG*/
            <Route path="/clubdashboard" element={<ClubDash/>}/>
            <Route path="/clubcalender" element={<ClubCalender/>}/>
            
          </Routes>
        </BrowserRouter>
    )
}