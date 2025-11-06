import { ChevronDown } from "lucide-react"

export const Events = () => {
    return (
        <div className="flex flex-col gap-2">
            <h className="font-medium text-gray-900">Events</h>
            <div className="flex flex-row gap-2">
                <div className="bg-white/50 border border-gray-300 items-center justify-center text-sm text-gray-500 p-1 rounded">Trending</div>
                <div className="bg-white/50 border border-gray-300 items-center justify-center text-sm text-gray-500 p-1 rounded">Upcoming</div>
                <div className="bg-white/50 border border-gray-300 items-center justify-center text-sm text-gray-500 p-1 rounded">Innovation</div>
                <div className="bg-white/50 border border-gray-300 items-center justify-center text-sm text-gray-500 p-1 rounded">Finance</div>
                <div className="bg-white/50 border border-gray-300 items-center justify-center text-sm text-gray-500 p-1 rounded">Marketing</div>

                <div className="flex flex-row items-center space-x-3 ml-auto">
                    <div className="text-sm text-gray-600">Sort by</div>
                    <div className="flex items-center border border-gray-300 rounded-lg text-xs text-gray-600 px-2 py-1 space-x-1">
                        <p>Date</p>
                        <ChevronDown size={14} />
                    </div>
                </div>

            </div>

        </div>
    )
}
