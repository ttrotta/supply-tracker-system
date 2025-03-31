import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Panelbar from './Panelbar';

const Layout = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Panelbar />
        <main className='flex-1 p-4 bg-gray-200 overflow-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
