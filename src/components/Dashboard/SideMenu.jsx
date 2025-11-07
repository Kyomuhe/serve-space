import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/serveSpaceLogo.png';
import profile from '../../assets/profile.png';
import { ChevronRight, Menu } from 'lucide-react';
import { LayoutDashboard, Lightbulb, MessageSquare, Bell, Settings, HelpCircle, LogOut } from 'lucide-react';

const SideMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const mainMenuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: Lightbulb, label: 'My Ideas', path: '/ideas' },
        { icon: MessageSquare, label: 'Feedback' },
        { icon: Bell, label: 'Notifications' },
    ];

    const otherMenuItems = [
        { icon: Settings, label: 'Settings' },
        { icon: HelpCircle, label: 'Help Centre' },
        { icon: LogOut, label: 'Log Out' },
    ];

    const getActivePath = () => {
        if (location.pathname === '/' || location.pathname === '') {
            return '/dashboard';
        }
        return location.pathname;
    };

    const activePath = getActivePath();

    return (
        <div className={`${isCollapsed ? 'w-20' : 'w-64'} h-auto bg-white rounded-3xl p-6 flex flex-col gap-6 transition-all duration-300`}>
            <div className='flex items-center justify-between'>
                {!isCollapsed && (
                    <img src={logo} alt="servespace logo" className='w-32 h-auto' />
                )}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className='p-2  hover:bg-gray-100 rounded-lg transition-colors ml-auto'
                >
                    <Menu size={20} className='text-blue-600' />
                </button>
            </div>
            <div className='h-px bg-gray-200'></div>


            <nav className='flex flex-col gap-1'>
                {mainMenuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activePath === item.path;
                    return (
                        <button
                            key={index}
                            onClick={() => navigate(item.path)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${isActive
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            title={isCollapsed ? item.label : ''}
                        >
                            <Icon size={20} className='flex-shrink-0' />
                            {!isCollapsed && (
                                <span className='text-sm font-medium'>{item.label}</span>
                            )}
                        </button>
                    );
                })}
            </nav>

            {!isCollapsed && (
                <div className='space-y-3'>
                    <div className='h-px bg-gray-200'></div>
                    <p className='text-xs font-semibold text-gray-500 uppercase px-3'>Others</p>
                </div>
            )}

            <nav className='flex flex-col gap-1'>
                {otherMenuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activePath === item.path;
                    return (
                        <button
                            key={index}
                            onClick={() => navigate(item.path)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${isActive
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            title={isCollapsed ? item.label : ''}
                        >
                            <Icon size={20} className='flex-shrink-0' />
                            {!isCollapsed && (
                                <span className='text-sm font-medium'>{item.label}</span>
                            )}
                        </button>
                    );
                })}
            </nav>

            <div className={`mt-auto ${isCollapsed ? 'flex justify-center' : ''}`}>
                {isCollapsed ? (
                    <img
                        className='w-10 h-10 rounded-full object-cover cursor-pointer'
                        src={profile}
                        alt="Profile"
                    />
                ) : (
                    <div className='flex items-center bg-cyan-200 rounded-lg p-3 gap-3 cursor-pointer hover:bg-blue-200 transition-colors shadow-2xl'>
                        <img
                            className='w-10 h-10 rounded-full object-cover flex-shrink-0'
                            src={profile}
                            alt="Profile"
                        />
                        <div className='flex-1 min-w-0'>
                            <p className='text-sm font-semibold text-gray-900'>Kyomuhendo Precious</p>
                            <p className='text-xs text-gray-600'>Freelancer</p>
                        </div>
                        <ChevronRight size={18} className='text-gray-600' />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SideMenu;