import { Bell, ChevronRight, Moon, Sun } from 'lucide-react'
import profile from '../../assets/profile.png'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const location = useLocation();
    const [selectedIcon, setSelectedIcon] = useState('sun');

    const getPageTitle = () => {
        const pathMap = {
            '/': 'Dashboard',
            '/dashboard': 'Dashboard',
            '/ideas': 'My Ideas',
        };

        return pathMap[location.pathname] || 'Dashboard';
    };

    return (
        <div className="h-16 flex items-center justify-between px-6">
            <div className='hidden lg:block'>
                <h1 className="font-medium text-2xl">{getPageTitle()}</h1>
            </div>

            <div className='flex items-center gap-2 ml-auto'>
                <div className='bg-white rounded flex p-1 space-x-1 text-gray-600'>
                    <div
                        className={selectedIcon === 'sun' ? 'bg-gray-200 rounded p-1' : 'rounded p-1'}
                        onClick={() => setSelectedIcon('sun')}
                    >
                        <Sun size={22} />
                    </div>
                    <div
                        className={selectedIcon === 'moon' ? 'bg-gray-200 rounded p-1' : 'rounded p-1'}
                        onClick={() => setSelectedIcon('moon')}
                    >
                        <Moon size={22} />
                    </div>
                </div>
                <button className="relative text-gray-600 bg-white p-2 rounded">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className='flex items-center bg-white gap-3 h-10 hover:bg-gray-300 rounded-lg px-3 transition-colors'>
                    <img
                        src={profile}
                        className='w-8 h-8 rounded-full'
                        alt="Profile"
                    />
                    <div className='hidden sm:block'>
                        <p className='text-sm'>Kyomuhendo</p>
                        <p className='text-gray-400 text-xs'>Freelancer</p>
                    </div>
                    <ChevronRight size={20} className='text-gray-400 hidden sm:block' />
                </button>
            </div>
        </div>
    )
}
export default Header;