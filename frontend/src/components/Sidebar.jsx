import { useState } from 'react';
import NavLinks from './NavLinks';

const Sidebar = () => {
  return (
    <>
      <SidebarDesktop />
      <SidebarMobile />
    </>
  );
};

const SidebarDesktop = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const handleClickOpen = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div
      className={`${sidebarExpanded ? 'w-42' : 'w-18 '} bg-gray-600 p-2  relative duration-300`}
    >
      <img
        src='./src/assets/images/control.png'
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-bg-purple-800
            border-1 rounded-full  ${!sidebarExpanded && 'rotate-180'}`}
        onClick={handleClickOpen}
      />
      <div className='flex gap-x-4 items-center mb-4'>
        <img
          src='./src/assets/images/logo.png'
          className={`my-3 ml-1 cursor-pointer duration-500 ${sidebarExpanded && 'rotate-[360deg]'} `}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !sidebarExpanded && 'scale-0'
          }`}
        >
          Supp T
        </h1>
      </div>

      <nav
        className={`flex flex-col mt-12 transition-all duration-300 ${!sidebarExpanded && 'items-center'} h-screen gap-3`}
      >
        <NavLinks expandedNav={sidebarExpanded} />
      </nav>
    </div>
  );
};

const SidebarMobile = () => {
  <div>{/* To complete. */}</div>;
};

export default Sidebar;
