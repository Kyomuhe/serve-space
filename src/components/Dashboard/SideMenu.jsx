import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/serveSpaceLogo.png';
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
                            {/* <div className='bg-cyan-200 rounded-lg flex flex-row'>
                    <div className='bg-blue-700 rounded-full'></div>
                    <div></div>
                    <h1 ></h1>


                </div>
 */}

        </div>
    );

};
export default SideMenu;