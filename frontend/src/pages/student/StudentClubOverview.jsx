import { useParams } from "react-router-dom";

export default  function StudentClubOverview(){
    const {clubId} = useParams();

    return(
        <div>
            Club Details for: {clubId}
        </div>
    )
}