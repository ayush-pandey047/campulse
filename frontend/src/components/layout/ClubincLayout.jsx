import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function FacultyLayout({children}){
    return (
        <div>
            <Navbar/>
            <div className="flex">
                <Sidebar>
                    <p>ClubInc Menu</p>
                </Sidebar>
                <main className="flex-1 p-4">
                    {childer}
                </main>
            </div>
        </div>
    );
}