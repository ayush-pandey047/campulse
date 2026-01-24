import ClubincLayout from "../../components/layout/ClubincLayout";
import StatCard from "../../components/common/StatCard";
import { useNavigate } from "react-router-dom";
import clubRequests from "../../utils/mockRequ";

export default function Clubdash(){
    const navigate = useNavigate();

    const approvedMembers = clubRequests.filter(
        (r) => r.status === "APPROVED" && r.type === "JOIN"
    )

    return (
        <ClubincLayout>
            <div className="p-6">
                <h1 className="text-2x1 font-bold mb-6">CLUB INCHARGE DASHBOARD</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatCard
                        title="Club Members"
                        value={approvedMembers.length}
                    />

                    <StatCard
                        title="Active Registrations"
                        value={pendingRequests.length}
                    />

                    <div
                        className="cursor-pointer"
                        onClick={() => navigate("/club/requests")}
                    >
                        <StatCard
                        title="Pending Requests"
                        value={pendingRequests.length}
                        />
                    </div>
                </div>
                <h2 className="text-lg font-semibold mt-6">CLub Members</h2>

                {approvedMembers.length === 0 ? (
                    <p className="text-gray-500 mt-3">
                        No approved members yet
                    </p>
                    ) : (
                    <ul className="mt-4 space-y-2">
                        {approvedMembers.map((member) => (
                        <li
                            key={member.id}
                            className="bg-white p-3 rounded shadow flex justify-between items-center"
                            >
                            <span className="font-medium">
                                {member.studentName}
                            </span>
                            <span className="text-sm text-gray-500">
                                Member
                            </span>
                        </li>
                        ))}
                    </ul>
                    )}
            </div>
        </ClubincLayout>
    )
}