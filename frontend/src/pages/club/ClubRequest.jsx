import { useState } from "react";
import clubRequests from "../../utils/mockRequ";

export default function ClubIncRequests() {
  const [requests, setRequests] = useState(clubRequests);

  const handleAction = (id, action) => {
    const request = requests.find((r) => r.id === id);

    if (action === "APPROVED" && request.type === "LEAVE") {
      console.log(`${request.studentName} removed from club`);
    }

    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: action } : req
      )
    );
  };

  const pendingRequests = requests.filter(
    (req) => req.status === "PENDING"
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Club Requests
      </h1>

      {pendingRequests.length === 0 ? (
        <p className="text-gray-500">
          No pending requests
        </p>
      ) : (
        <div className="space-y-4">
          {pendingRequests.map((req) => (
            <div
              key={req.id}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">
                  {req.studentName}
                </p>
                <p className="text-sm text-gray-500">
                  {req.type === "JOIN"
                    ? "Requested to JOIN"
                    : "Requested to LEAVE"}{" "}
                  {req.clubName}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    handleAction(req.id, "APPROVED")
                  }
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  Approve
                </button>

                <button
                  onClick={() =>
                    handleAction(req.id, "REJECTED")
                  }
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
