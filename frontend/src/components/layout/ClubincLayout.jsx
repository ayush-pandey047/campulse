import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function FacultyLayout(){
    return (
        <div>
            <Navbar/>
            <div className="flex">
                <Sidebar>
                    <p>ClubInc Menu</p>
                </Sidebar>
                <main className="flex-1 p-4">
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}