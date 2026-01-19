import { useParams } from "react-router-dom";
import { studentClubs } from "../../utils/mockClubs.js";
import StatCard from "../../components/common/StatCard.jsx";
import EventCard from "../../components/common/EventCard.jsx";
import { useState } from "react";

export default function StudentClubOverview() {
    const { clubId } = useParams();

    const club = studentClubs.find(
        (c) => c.id === clubId
    );

    const [isMember, setIsMember] = useState( club.memberList.some((m) => m.nam === "Ayush Pandey"))

    if (!club) {
        return (
            <div className="p-6">
                <h2 className="text-xl font-bold text-red-500">
                    Club Not Found
                </h2>
            </div>
        )
    }

    return (
        <div className="p-6 space-y-6">
            <div>
                <h1 className="text-2xl font-bold mb-2">
                    {club.name}
                </h1>
                <p className="text-gray-600">
                    {club.description}
                </p>
            </div>

            {/*Indvidual reuest to join the club and leave */}

            <div>
                {isMember ? (
                    <button 
                        onClick={()=> setIsMember(false)} 
                        className="px-4 py-2 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                            Leave Club
                    </button>
                ): (
                    <button onClick={()=> setIsMember(true)}
                    className="px-4 py-2 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                        JOIN CLUB
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-sm text-gray-500">Members</h3>
                    <p className="text-xl font-bold">{club.members}</p>
                </div>

                <div className="bg-white p-4 rounded shadow" >
                    <h3 className="text-sm text-gray-500">Events</h3>
                    <p className="text-xl font-bold">{club.events.length}</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-sm text-gray-500">Role</h3>
                    <p className="text-xl font-bold">Member</p>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-sm text-gray-500">Status</h3>
                    <p className="text-xl font-bold">Active</p>
                </div> */}
                <StatCard
                    title="Members"
                    value={club.members}/>
                <StatCard
                    title="Total Events"
                    value={club.events.length}/>
                <StatCard
                    title="Status"
                    value="Active"/>
            </div>


            {/* The Upcoming Events*/}
            <div>
                <h2 className="text-lg font-semibold mb-2">
                    Upcoming Events
                </h2>
                { club.events.length === 0 ? (
                    <p className="text-gray-500">No upcoming events</p>
                ): (<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {club.events.map((event)=>(
                        <EventCard
                        key={event.id}
                        date={event.date}
                        type={event.type}/>
                    ))}
                </div>)}
            </div>

            {/* Club Memebers and their roles*/}

            { isMember &&  (<div>
                <h2 className="text-lg font-semibold mb-3">
                    Club Members
                </h2>
                <div className="bg-white rounded-lg shadow divide-y">
                    {club.memberList.map((member)=>(
                        <div 
                            key={member.id}
                            className="flex items-center justify-between p-3">
                            <p className="font-medium">{member.name}</p>
                            <span className={`text-xs px-2 py-1 rounded ${
                                member.role === "Lead"
                                        ? "bg-purple-100 text-puprple-700"
                                        : member.role === "Core"
                                        ? "bg-blue-100 text-blue-700"
                                        : "bg-gray-100 text-gray-600" 
                            }`}>
                                {member.role}
                            </span>
                        </div>
                    ))}
                </div>
            </div>)}
        </div>
    );
}


