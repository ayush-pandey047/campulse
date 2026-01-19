import { useState } from "react";
import { mockRequests } from "../../utils/mockRequ";

export default function ClubRequests(){
    const [requests,setRequest] = useState();

    const handelAction = (id,action) => {
        setRequest((prev) => 
                prev.map((req) => 
                    req.id === id
                       ? {...req, status:action}
                    : req
                )
            )
        }

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">
                Club Rquests
            </h1>
            {requests.length === 0 && (
                <div>
                    <div>
                        <p>{req.studentName}</p>
                        <p>Request to {req.type} club</p>
                    </div>
                </div>
            )}
        </div>
    )
}