import ClubincLayout from "../../components/layout/ClubincLayout";
import StatCard from "../../components/common/StatCard";

export default function clubdash(){
    return (
        <ClubincLayout>
            <div className="p-6">
                <h1 className="text-2x1 font-bold mb-6">Club Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard title="Club Members" value = "28"/>
                    <StatCard title="Active Registrations" value = "2"/>
                </div>
            </div>
        </ClubincLayout>
    )
}