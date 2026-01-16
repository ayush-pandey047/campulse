import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/auth/login.jsx";
import Signup from "../pages/auth/signup.jsx";
import ForgetPassword from "../pages/auth/forgetpass.jsx";

import FacultyLayout from "../components/layout/FacultyLayout.jsx";
import FacultyDashboard from "../pages/faculty/FacultyDashboard.jsx";
import FacultyCalander from "../pages/faculty/FacultyCalendar.jsx";

import StudentDashboard from "../pages/student/StudentDashboard.jsx";
import StudentCalender from "../pages/student/StudentCalendar.jsx";
import StudentLayout from "../components/layout/StudentLayout.jsx";
import StudentClubOverview from "../pages/student/StudentClubOverview.jsx"

import ClubIncLayout from "../components/layout/ClubincLayout.jsx"
import ClubIncDashboard from "../pages/club/ClubIncDashboard.jsx";
import ClubCInCalender from "../pages/club/ClubIncCalendar.jsx";


export default function AppRoute(){
    return(
        <BrowserRouter>
          <Routes>
            /** THIS IS FOR AUTH CONECTNG*/
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/forgetpassword" element={<ForgetPassword/>}/>

            /** THIS IS FOR Faculty CONECTNG*/
            <Route path="/faculty" element={<FacultyLayout />}>
                    <Route path="dashboard" element={<FacultyDashboard />} />
                    <Route path="calender" element={<FacultyCalander />} />
            </Route>

            /** THIS IS FOR Student CONECTNG*/
            <Route path="/student" element={<StudentLayout />}>
                     <Route path="dashboard" element={<StudentDashboard />} />
                     <Route path="calender" element={<StudentCalender />} />
                     <Route path="clubs/:clubId" element={<StudentClubOverview />} />
            </Route>

            /** THIS IS FOR ClubInc CONECTNG*/
            <Route path="/club" element={<ClubIncLayout />}>
                    <Route path="dashboard" element={<ClubIncDashboard />} />
                    <Route path="calender" element={<ClubCInCalender />} />
            </Route>
          </Routes>
        </BrowserRouter>
    )
}
