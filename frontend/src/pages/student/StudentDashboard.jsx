import StatCard from "../../components/common/StatCard"

export default function studash(){
    return (
        <div className="p-6">
            <h1 className="text-2x1 font-bold mb-6">Student Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Registered Events" value = "4"/>
                <StatCard title="Upcoming deadlines " value = "1"/>
            </div>
        </div>

        
    )
}