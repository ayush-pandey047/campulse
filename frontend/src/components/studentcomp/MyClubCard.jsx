import {studentClubs} from "../../utils/mockClubs";
import {Link} from "react-router-dom";

export default function MyClubsCard({clubIds}){
    const myClubs = studentClubs.filter(club => clubIds.includes(club.id))

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-3">My Clubs</h2>
            <div className="space-y-2">{myClubs.map(club=>(
                <Link
                  key = {club.id}
                  to = {`student/clubs/${club.id}`}
                  className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                    {club.name}
                
                </Link>
            ))}</div>
        </div>
    )
}