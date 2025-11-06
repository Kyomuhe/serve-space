import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/serveSpaceLogo.png';
import profile from '../../assets/profile.png';
import { ChevronRight } from 'lucide-react';
import { LayoutDashboard, Lightbulb, MessageCircleQuestionMark, Bell, Settings, MessageSquare, LogOut } from 'lucide-react';
const SideMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: Lightbulb, label: 'My Ideas' },
        { icon: MessageSquare, label: 'Feed back', },
        { icon: Bell, label: 'Notification' },
        { icon: Settings, label: 'Settings' },
        { icon: MessageCircleQuestionMark, label: 'Help Center' },
        { icon: LogOut, label: 'Logout' },


    ]
    return (
        <div className='w-64 h-screen bg-white rounded-3xl p-6 flex flex-col gap-4'>
            <div className='space-y-3'>
                <img src={logo} alt="servespace logo" className='w-40 h-8' />
                <div className='flex-1 h-px bg-gray-300'></div>

            </div>
            <nav className='flex flex-col gap-3'>
                {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                        <button
                            key={index}
                            onClick={() => navigate(item.path)}
                            className={`flex gap-3 text-gray-700 px-4 py-2 rounded-lg transition-all ${isActive
                                ? 'bg-gray-200 text-blue-500'
                                : 'hover:text-blue-400 hover:bg-gray-200'

                                }`}
                        >
                            <Icon size={20} />
                            <span className='text-sm font-medium'>{item.label}</span>

                        </button>
                    );
                })}


            </nav>
            <div className='flex flex-row bg-cyan-200 rounded shadow-lg p-2 gap-2 mt-auto'>
                <img
                    className='w-8 h-8 rounded-full object-cover'
                    src={profile}
                />
                <div>
                    <p className='text-sm font-medium text-gray-900'>Kyomuhendo Precious</p>
                    <p className='text-xs text-gray-700'>Freelancer</p>
                </div>
                {/* <ChevronRight size={20} className='items-center justify-center'/> */}

            </div>

        </div>
    );

};
export default SideMenu;