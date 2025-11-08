import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/serveSpaceLogo.png';
import profile from '../../assets/profile.png';
import { ChevronRight, Menu, X } from 'lucide-react';
import { LayoutDashboard, Lightbulb, MessageSquare, Bell, Settings, HelpCircle, LogOut } from 'lucide-react';

const SideMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const handleNavigation = (path) => {
        if (path) {
            navigate(path);
        }
        setIsMobileMenuOpen(false);
    };

    const MenuContent = () => (
        <>
            <div className='flex items-center justify-between'>
                {!isCollapsed && (
                    <img src={logo} alt="servespace logo" className='w-32 h-auto' />
                )}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className='p-2 hover:bg-gray-100 rounded-lg transition-colors ml-auto hidden lg:block'
                >
                    <Menu size={20} className='text-blue-600' />
                </button>
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden'
                >
                    <X size={24} className='text-gray-600' />
                </button>
            </div>
            <div className='h-px bg-gray-200'></div>

            <nav className='flex flex-col'>
                {mainMenuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activePath === item.path;
                    return (
                        <button
                            key={index}
                            onClick={() => handleNavigation(item.path)}
                            className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-lg transition-all ${isActive
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            title={isCollapsed ? item.label : ''}
                        >
                            <Icon size={20} className='shrink-0' />
                            {!isCollapsed && (
                                <span className='font-medium'>{item.label}</span>
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

            <nav className='flex flex-col'>
                {otherMenuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activePath === item.path;
                    return (
                        <button
                            key={index}
                            onClick={() => handleNavigation(item.path)}
                            className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-lg transition-all ${isActive
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            title={isCollapsed ? item.label : ''}
                        >
                            <Icon size={20} className='shrink-0' />
                            {!isCollapsed && (
                                <span className='font-medium'>{item.label}</span>
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
                    <div className='flex items-center bg-cyan-100 rounded-lg p-3 gap-3 cursor-pointer hover:bg-blue-200 transition-colors shadow-2xl'>
                        <img
                            className='w-10 h-10 rounded-full shrink-0'
                            src={profile}
                            alt="Profile"
                        />
                        <div className='flex-1 min-w-0'>
                            <p className='text-sm font-semibold text-gray-900'>Precious kay</p>
                            <p className='text-xs text-gray-600'>Freelancer</p>
                        </div>
                        <ChevronRight size={18} className='text-gray-600' />
                    </div>
                )}
            </div>
        </>
    );

    return (
        <>
            <button
                onClick={() => setIsMobileMenuOpen(true)}
                className='lg:hidden fixed top-4 left-4 z-40 p-3 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors'
            >
                <Menu size={20} className='text-blue-600' />
            </button>

            {isMobileMenuOpen && (
                <div
                    className='fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden'
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            <div
                className={`fixed top-1 left-0 h-full w-64 bg-white rounded-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } p-6 flex flex-col gap-6 shadow-2xl`}
            >
                <MenuContent />
            </div>

            <div className={`hidden lg:flex ${isCollapsed ? 'w-20' : 'w-64'} h-auto bg-white rounded-3xl p-6 flex-col gap-6 transition-all duration-300`}>
                <MenuContent />
            </div>
        </>
    );
};

export default SideMenu;