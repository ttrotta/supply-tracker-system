import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import PanelBar from './PanelBar'

const Layout = () => {
    return (
        <div className="flex h-screen w-screen">
            <Sidebar />
            
            <div className="flex flex-col flex-1">
                <PanelBar />
                <main className="flex-1 p-6 bg-gray-100 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout