import { ChevronDown, CalendarDays, Clock, MessageSquare, ScrollText } from "lucide-react"
import ideas from '../../assets/ideas.png'
import Hackathon from '../../assets/Hackathon.png'



export const Events = () => {

    const Event = [
        {
            id: 1,
            image: ideas,
            title: "Education Financing Symposium",
            description: "Hosted By Innovation Hub",
            date: "09/08/25",
            timeRange: "9:00am-10:30am"
        },
        {
            id: 2,
            image: Hackathon,
            title: "Java Hackathon",
            description: "Hosted by Service Corps",
            date: "06/09/25",
            timeRange: "4:00pm - 5:00pm",

        },
        {
            id: 3,
            image: ideas,
            title: "Python Boot Camp",
            description: "Meant for young girls in tech",
            date: "09/09/25",
            timeRange: "6:00am - 4:00pm",


        }
    ]
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-gray-900 text-lg">Events</h2>
            <div className="flex flex-row gap-2 items-center flex-wrap hidden md:flex">
                <button className="bg-white border border-gray-300 items-center justify-center text-sm text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-50">Trending</button>
                <button className="bg-white border border-gray-300 items-center justify-center text-sm text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-50">Upcoming</button>
                <button className="bg-white border border-gray-300 items-center justify-center text-sm text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-50">Innovation</button>
                <button className="bg-white border border-gray-300 items-center justify-center text-sm text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-50">Finance</button>
                <button className="bg-white border border-gray-300 items-center justify-center text-sm text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-50">Marketing</button>

                <div className="flex flex-row items-center gap-2 ml-auto">
                    <span className="text-sm text-gray-600">Sort by</span>
                    <button className="flex items-center border border-gray-300 rounded-lg text-sm text-gray-600 px-3 py-1.5 gap-1 hover:bg-gray-50">
                        <span>Date</span>
                        <ChevronDown size={16} />
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                {Event.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg overflow-hidden flex flex-col sm:flex-row shadow-sm border border-gray-200"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full sm:w-40 h-48 sm:h-auto object-cover flex-shrink-0"
                        />

                        <div className="flex flex-col flex-1 p-4">
                            <div className="mb-auto">
                                <h3 className="font-semibold text-gray-900 text-base mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.description}</p>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-1.5">
                                        <CalendarDays size={16} className="text-gray-400" />
                                        <span>{item.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock size={16} className="text-gray-400" />
                                        <span>{item.timeRange}</span>
                                    </div>
                                </div>

                                <button className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-100 w-full sm:w-auto">
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>        </div>
    )
}

export const Feedback = () => {
    const feedbackItems = [
        {
            id: 1,
            organization: "Innovation hub",
            timestamp: "Unknown  9/8/25 9:24"
        },
        {
            id: 2,
            organization: "Innovation hub",
            timestamp: "Unknown  9/9/25 9:24"
        },
        {
            id: 3,
            organization: "Innovation hub",
            timestamp: "Unknown  10/9/25 9:24"
        }
    ]

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h2 className="font-semibold text-gray-900 text-base mb-4">Feedback</h2>

            <div className="flex flex-col gap-3">
                {feedbackItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-start gap-3 p-3 hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                        <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                            <ScrollText size={16} className="text-gray-600" />
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <h3 className="font-medium text-gray-900 text-sm">
                                {item.organization}
                            </h3>
                            <p className="text-xs text-gray-500">
                                {item.timestamp}
                            </p>
                            <div className='h-px bg-gray-200'></div>


                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export const Notifications = () => {
    const Notification = [
        {
            id: 1,
            organization: "kyomuhendo Precious",
            timestamp: "Uploaded on 9/8/25 9:24"
        },
        {
            id: 2,
            organization: "java hackthon",
            timestamp: "Uploaded on 9/9/25 9:24"
        },
        {
            id: 3,
            organization: "new message",
            timestamp: "Uploaded on 10/9/25 9:24"
        }
    ]

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h2 className="font-semibold text-gray-900 text-base mb-4">Notifications</h2>

            <div className="flex flex-col gap-3">
                {Notification.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-start gap-3 p-3 hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                        <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                            <MessageSquare size={16} className="text-gray-600" />
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <h3 className="font-medium text-gray-900 text-sm">
                                {item.organization}
                            </h3>
                            <p className="text-xs text-gray-500">
                                {item.timestamp}
                            </p>
                            <div className='h-px bg-gray-200'></div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}