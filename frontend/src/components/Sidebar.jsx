import { useState } from 'react';
import NavLinks from './NavLinks';
import { IndentIncrease, IndentDecrease } from 'lucide-react';

const Sidebar = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed h-screen hidden md:block ${
          sidebarExpanded ? 'w-42' : 'w-18'
        } bg-gray-600 p-2 relative duration-300 z-20`}
      >
        <img
          src='./src/assets/images/control.png'
          className={`absolute cursor-pointer -right-3 top-7 w-7 border-bg-purple-800
              border-1 rounded-full ${!sidebarExpanded && 'rotate-180'}`}
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
          alt='Toggle sidebar'
        />
        <div className='flex gap-x-4 items-center mb-4'>
          <img
            src='./src/assets/images/logo.png'
            className={`my-3 ml-1 cursor-pointer duration-500 ${sidebarExpanded && 'rotate-[360deg]'}`}
            alt='Logo'
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
          className={`flex flex-col mt-12 transition-all duration-300 ${
            !sidebarExpanded && 'items-center'
          } gap-3`}
        >
          <NavLinks expandedNav={sidebarExpanded} />
        </nav>
      </div>

      <div className='md:hidden fixed top-4 left-4 z-30'>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`p-2 bg-gray-700 rounded-md text-white ${mobileMenuOpen && 'hidden'}`}
        >
          <IndentIncrease size={22} className={`w-6 h-6`} />
        </button>
      </div>

      <div
        className={`flex flex-col fixed h-screen md:hidden bg-gray-600 p-2 w-42 duration-300 z-20 gap-4 ${
          !mobileMenuOpen && '-left-full'
        }`}
      >
        <div className='flex gap-x-4 items-center mt-2'>
          <img
            src='./src/assets/images/logo.png'
            className='my-3 ml-1'
            alt='Logo'
          />
          <h1 className='text-white font-medium text-xl'>Supp T</h1>
        </div>

        <button
          onClick={() => setMobileMenuOpen(false)}
          className='flex justify-center text-white p-2'
        >
          <IndentDecrease className={'w-10 h-10'} />
        </button>

        <nav className='flex flex-col gap-2'>
          <NavLinks expandedNav={true} />
        </nav>
      </div>

      {mobileMenuOpen && (
        <div
          className='fixed inset-0 bg-black opacity-40 z-10 md:hidden'
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
