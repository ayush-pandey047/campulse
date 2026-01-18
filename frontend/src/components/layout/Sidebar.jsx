import { NavLink } from "react-router-dom";

export default function Sidebar({ menu, clubs }) {
  return (
    <aside className="w-64 min-h-screen border-r bg-white p-4">
      
      {/* MENU */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-500 mb-3">
          MENU
        </h2>

        <ul className="space-y-2">
          {menu.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* CLUBS */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 mb-3">
          YOUR CLUBS
        </h2>

        <ul className="space-y-2">
          {clubs.map((club) => (
            <li key={club.id}>
              <NavLink
                to={`/student/clubs/${club.id}`}
                className={({ isActive }) =>
                  `flex justify-between px-3 py-2 rounded-md text-sm
                  ${
                    isActive
                      ? "bg-green-100 text-green-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <span>{club.name}</span>
                <span className="text-xs text-gray-500">
                  {club.members}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}