import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function FacultyLayout({childern}){
    return (
        <div>
            <Navbar/>
            <div className="flex">
                <Sidebar>
                    <p>Faculty Menu</p>
                </Sidebar>
                <main className="flex-1 p-4">
                    {childern}
                </main>
            </div>
        </div>
    );
}