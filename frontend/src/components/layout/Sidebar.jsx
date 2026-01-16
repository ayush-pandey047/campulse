import {NavLink} from "react-router-dom";

export default function Sidebar({menu, clubs}){
    return(
        <>
        <h1 className="text-x1 font-bold text-gray-800 dark:text-whilte mb-6"> Campulse</h1>
        <div className="w-64 min-h-screen bg-gray-200 dark:bg-gray-800 p-4">
            <div className="space-y-2">
                {menu.map((item) => {
                    <NavLink
                      key={item.path} 
                      to={item.path}
                      className = {({isActive}) => 
                            `block px-3 py-2 rounded-md text-sm transisation
                            ${
                                isActive
                                ? 'bg-blue-500 text-whilte'
                                : "text-gray-700 dark:gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                            }`}>
                            {item.label}
                    </NavLink>
                })}
            </div>

        {/* CLUB SECTION (ONLY FOR STUDENTS)*/}
            {clubs && 
            (<div className="mt-6">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    My Club
                </p>

                <div className="space-y-1">
                    {clubs.map((club)=>(
                        <NavLink 
                          key = {club.id}
                          to = {`/student/clubs/${club.id}`}
                          className = {({isActive}) => 
                            `block px-3 py-1 rounded-md text-sm 
                            ${
                                isActive
                                ? 'bg-blue-500 text-whilte'
                                : "text-gray-600 dark:gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}>     
                        {club.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        )}
        </div>
        </>
    );
}