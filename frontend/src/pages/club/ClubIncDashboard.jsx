import ClubincLayout from "../../components/layout/ClubincLayout";
import StatCard from "../../components/common/StatCard";
import { useNavigate } from "react-router-dom";

export default function clubdash(){
    const navigate = useNavigate();

    return (
        <ClubincLayout>
            <div className="p-6">
                <h1 className="text-2x1 font-bold mb-6">CLUB INCHARGE DASHBOARD</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard title="Club Members" value = "28"/>
                    <StatCard title="Active Registrations" value = "2"/>

                    <div className="cursor-pointer" onClick={() => navigate("/club/requests")}>
                        <StatCard 
                            title = "Active Registrations"
                            value="2"/>
                    </div>
                </div>
            </div>
        </ClubincLayout>
    )
}