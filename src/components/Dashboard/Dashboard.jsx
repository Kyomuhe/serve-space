import { Plus } from "lucide-react";
import { Events } from "./DashboardOverview";

const Dashboard = () => {
    const stats = [
        {
            id: 1,
            count: 12,
            label: 'Submitted',
            description: 'Total ideas submitted',
            color: 'text-green-600',
            bgColor: 'bg-blue-100'
        },
        {
            id: 2,
            count: 3,
            label: 'Drafts',
            description: 'Total ideas drafted',
            color: 'text-blue-900',
        },
        {
            id: 3,
            count: 12,
            label: 'Reviewed',
            description: 'Total ideas reviewed',
            color: 'text-yellow-500',
        },
        {
            id: 4,
            count: 2,
            label: 'Pending',
            description: 'Total ideas Pending',
            color: 'text-gray-500',
        },
    ]
    
    return (
        <div className="flex flex-col p-2 space-y-4">
            <div className="flex gap-6 items-start">
                <div className="flex flex-col">
                    <h1 className="font-semibold text-3xl mb-2 ">Share your Ideas</h1>
                    <p className="text-gray-500">Have an idea worth building?<br/>Submit it and start innovating</p>
                </div>

                <div className="flex gap-3 flex-1 rounded bg-white p-3">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="bg-cyan-100 shadow-lg rounded-lg p-2 flex-1"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-3">
                                    <span className={`${stat.color} font-bold text-xl`}>
                                        {stat.count}
                                    </span>
                                </div>
                                <h3 className="text-gray-900 font-semibold text-xs mb-1">
                                    {stat.label}
                                </h3>
                                {/* <p className="text-gray-500 text-xs">{stat.description}</p> */}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-lg border-2 border-dashed border-blue-300 flex flex-col items-center justify-center text-gray-400 gap-2 p-8 w-40">
                    <Plus size={24}/>
                    <p className="text-sm text-center">Create new Idea</p>
                </div>
            </div>
            <Events/>
            
        </div>
    )
}

export default Dashboard;