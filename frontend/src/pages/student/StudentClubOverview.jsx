import { useParams } from "react-router-dom";
import { studentClubs } from "../../utils/mockClubs.js";

export default function StudentClubOverview() {
    const { clubId } = useParams();

    const club = studentClubs.find(
        (c) => c.id === clubId
    );

    if (!club) {
        return <p className="p-6">Club Not Found</p>;
    }

    return (
        <div className="p-6 space-y-6">
            <div>
                <h1 className="text-2xl font-bold mb-2">
                    {club.name}
                </h1>
                <p className="text-gray-600">
                    {club.discription}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-sm text-gray-500">Members</h3>
                    <p className="text-xl font-bold">{club.members}</p>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-sm text-gray-500">Role</h3>
                    <p className="text-xl font-bold">Member</p>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-sm text-gray-500">Status</h3>
                    <p className="text-xl font-bold">Active</p>
                </div>
            </div>
        </div>
    );
}
