import { createContext, useContext, useState } from "react";
import { studentClubs } from "../utils/mockClubs";
import clubRequests from "../utils/mockRequ"; 

const ClubContext = createContext();

export const useClub = () => useContext(ClubContext);

export function ClubProvider({ children }) {
  const [clubs, setClubs] = useState(studentClubs);
  const [requests, setRequests] = useState(clubRequests); 

  const approveRequest = (requestId) => {
    const req = requests.find(r => r.id === requestId);
    if (!req) return;

    setClubs(prev =>
      prev.map(club =>
        club.id === req.clubId
          ? { ...club, members: club.members + 1 }
          : club
      )
    );

    setRequests(prev =>
      prev.map(r =>
        r.id === requestId
          ? { ...r, status: "APPROVED" }
          : r
      )
    );
  };

  const rejectRequest = (requestId) => {
    setRequests(prev =>
      prev.map(r =>
        r.id === requestId
          ? { ...r, status: "REJECTED" }
          : r
      )
    );
  };

  return (
    <ClubContext.Provider
      value={{ clubs, requests, approveRequest, rejectRequest }}
    >
      {children}
    </ClubContext.Provider>
  );
}
