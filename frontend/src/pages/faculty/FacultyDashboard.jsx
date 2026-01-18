import FacultyLayout from "../../components/layout/FacultyLayout";
import StatCard from "../../components/common/StatCard";

export default function Fasdash(){
    return (
        <FacultyLayout>
            <div className="p-6">
                <h1 className="text-2x1 font-bold mb-6">Faculty Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard title="Total Clubs" value = "12"/>
                    <StatCard title="Pending Feedback" value = "5"/>
                </div>
            </div>
        </FacultyLayout>
    )
}