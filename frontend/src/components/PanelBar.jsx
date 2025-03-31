const PanelBar = () => {
  return (
    <header className='bg-gray-800 text-white flex items-center p-4'>
      <h1 className='flex-1 text-lg'>Supply Tracker System</h1>

      <div className='hidden md:block mr-4'>
        <span>Random User</span>
      </div>

      <img
        src='https://i.pravatar.cc/40'
        alt='Perfil'
        className='w-10 h-10 rounded-full cursor-pointer'
      />
    </header>
  );
};

export default PanelBar;
