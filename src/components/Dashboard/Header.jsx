import { Bell, ChevronRight } from 'lucide-react'
import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className="h-16 flex items-center justify-between px-6">
            <div>
                <h1 className="font-medium text-2xl">Dashboard</h1>
            </div>

            <div className='flex items-center gap-2'>
                <button className="relative text-gray-600 bg-white p-2 rounded">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className='flex items-center bg-white gap-3 h-10 hover:bg-gray-300 rounded-lg px-3 transition-colors'>
                    <img
                        src={profile}
                        className='w-8 h-8 rounded-full object-cover'
                    />
                    <div>
                        <p className=' text-sm'>Kyomuhendo</p>
                        <p className='text-gray-400 text-xs'>HR Manager</p>

                    </div>
                    <ChevronRight size={20} className='text-gray-400' />

                </button>

            </div>
        </div>
    )
}
export default Header;