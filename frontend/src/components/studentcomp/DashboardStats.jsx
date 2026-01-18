import StatCard from "../common/StatCard";

export default function DashboardStats({clubsCount, eventsCount}){
    return(
        <div className="grid grid-clos-2 md:grid-cols-4 gap-4">
            <StatCard title="My Clubs" value={clubsCount}/>
            <StatCard title="Registered Events" value={eventsCount} />
        </div>
    );
}

