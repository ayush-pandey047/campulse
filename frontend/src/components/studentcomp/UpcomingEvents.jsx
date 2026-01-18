export default function UpcomingEvents({events}){
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-3"> Upcoming Events</h2>
            <div className="space-y-3">
                {events.map(event => (
                    <div key={event.id} className="border-b pb-2"> 
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}