export default function StatCard({ title, value, subtitle }) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-md hover:shadow-lg transition">
            <h4 className="text-sm text-gray-500 dark:text-gray-400">{title}</h4>
            <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">{value}</p>
            <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
        </div>
    );
}

// export default function StatCard(title,value,subtitle){
//     return (
//         <div className="br-white dark:bg-slate-800 rounded-xl p-5 shadow-md hover:shadow-lg transition">
//             <h4 className="text-sm text-gray-500 dark:text-gray-400">{title}</h4>
//             <p className="text-3x1 font-bold text-gray-500 dark:text-gray-800 dark:text-white mt-2">{value}</p>
//             <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
//         </div>
//     )
// }