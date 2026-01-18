import { useParams } from "react-router-dom";
import { studentClubs } from "../../utils/mockClubs";

export default function StudentClubOverview() {
    const { clubId } = useParams();

    const club = studentClubs.find(
        (c) => c.id === Number(clubId) // if club id is in "1" so number will convert it into number then it will check/filter out it.
    );

    if (!club) {
        return <p className="p-6">Club Not Found</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">
                {club.name}
            </h1>

            <p className="text-gray-600 mb-2">
                Total members: <strong>{club.members}</strong>
            </p>

            <p className="text-gray-600">
                Club activities, announcements, and events will appear here.
            </p>
        </div>
    );
}
