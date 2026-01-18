import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { studentClubs } from "../../utils/mockClubs.js";
import { studentMenu } from "../../utils/menuConfig";

export default function StudentLayout() {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar menu={studentMenu} clubs={studentClubs} />
                <main className="flex-1 p-4 bg-gray-50 min-h-screen">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
