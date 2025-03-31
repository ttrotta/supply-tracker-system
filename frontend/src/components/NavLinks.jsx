import { Link } from 'react-router-dom';
import { Home, Package, Truck, Map, Users } from 'lucide-react';

const NavLinks = ({ expandedNav }) => {
  return (
    <>
      <Link to='/' className='sidebar-section-full'>
        <Home size={22} /> {expandedNav && 'Home'}
      </Link>
      <Link to='/stock' className='sidebar-section-full'>
        <Package size={22} /> {expandedNav && 'Stock'}
      </Link>
      <Link to='/delivery' className='sidebar-section-full'>
        <Truck size={22} /> {expandedNav && 'Delivery'}
      </Link>
      <Link to='/map' className='sidebar-section-full'>
        <Map size={22} /> {expandedNav && 'Map'}
      </Link>
      <Link to='/clients' className='sidebar-section-full'>
        <Users size={22} /> {expandedNav && 'Clients'}
      </Link>
    </>
  );
};

export default NavLinks;
