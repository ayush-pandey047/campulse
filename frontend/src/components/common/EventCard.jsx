export default function EventCard({title,date,type}){
    return (
        <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{date}</p>

            {type && (
                <span className="inline-block mt-2 text-xs px-2 py-1 rounded bg-blue-100 text-blue-600">
                    {type}
                </span>
            )}
        </div>
    )
}