import Header from "./Header";
import SideMenu from "./SideMenu";
import { Outlet } from 'react-router-dom';



const Layout = () => {
    return (
        <div className="flex h-screen bg-slate-100 overflow-hidden p-3">
            <SideMenu />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />

                <main className="flex-1 overflow-auto p-6">
                    <Outlet />

                </main>

            </div>

        </div>

    )
}
export default Layout;