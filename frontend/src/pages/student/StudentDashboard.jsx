import DashboardStats from "../../components/studentcomp/DashboardStats"
import MyClubsCard from "../../components/studentcomp/MyClubCard"
import UpcomingEvents from "../../components/studentcomp/UpcomingEvents"
import mockEvents from "../../utils/mockevents"
import mockStudent from "../../utils/mockStudent"

export default function studash(){
    return (
        <div className="p-6  space-y-6">
                <DashboardStats 
                    clubsCount={mockStudent.clubs.length}
                    eventsCount={mockStudent.registerEvents.length}/>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <MyClubsCard clubIds={mockStudent.clubs}/>
                    <div className="md:col-span-2">
                        <UpcomingEvents events={mockEvents}/>
                    </div>
                </div>
                
        </div>

        
    )
}