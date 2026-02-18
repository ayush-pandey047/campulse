import { useParams } from "react-router-dom";
import { studentClubs } from "../../utils/mockClubs.js";
import StatCard from "../../components/common/StatCard.jsx";
import EventCard from "../../components/common/EventCard.jsx";
import { useState } from "react";
import { useEffect } from "react";
import clubRequests from "../../utils/mockRequ.js";

export default function StudentClubOverview() {
    const { clubId } = useParams();

    const club = studentClubs.find(
        (c) => c.id === clubId
    );

   



    if (!club) {
        return (
            <div className="p-6">
                <h2 className="text-xl font-bold text-red-500">
                    Club Not Found
                </h2>
            </div>
        )
    }

    const loggedInStudentId = "stu_1";

    const myRequest = clubRequests.find(
        (r) => r.clubId === club.id && r.studentId === loggedInStudentId
      );

    const isMember = club.members.includes(loggedInStudentId);

    const handleRequest = (type) => {
        clubRequests.push({
            id:Date.now(),
            studentId: loggedInStudentId,
            studentName: "Ayush",
            clubId: club.id,
            clubName: club.name, 
            type,
            status: "Pending"
        });

        alert("Request Sent!");
    }


    

    return (
        <div className="p-6 space-y-6">
            <div>
                <h1 className="text-2xl font-bold mb-2"> {club.name} </h1>
                <p className="text-gray-600"> {club.description} </p>
            </div>

            {/* Student can request for joining or leaving the club */}
            <div className="space-x-2">
                {myRequest ? (
                <span
                    className={`px-3 py-1 rounded text-sm font-medium ${
                    myRequest.status === "PENDING"
                    ? "bg-yellow-100 text-yellow-700"
                    : myRequest.status === "APPROVED"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                    }`}>
                    {myRequest.status} 
                </span>) 
                : 
                (<div className="my-4">
                    {isMember ? (
                        <button className="bg-red-500 text-white px-4 py-2 rounded">
                        Leave Club
                        </button>
                    ) : myRequest ? (
                        <span
                        className={`px-3 py-1 rounded text-sm font-medium ${
                            myRequest.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-700"
                            : myRequest.status === "APPROVED"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                        >
                        {myRequest.status}
                        </span>
                        ) : (
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                            Request to Join
                            </button>
                        )}
                        </div>
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
                
                <h2 className="text-lg font-semibold mb-3"> Club Members </h2>
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


