import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Home } from '../pages/Home.jsx';
import { Login } from '../pages/Login.jsx';
import { Stock } from '../pages/Stock.jsx';
import { Delivery } from '../pages/Delivery.jsx';
import { Map } from '../pages/Map.jsx';
import { Clients } from '../pages/Clients.jsx';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='stock' element={<Stock />} />
        <Route path='delivery' element={<Delivery />} />
        <Route path='map' element={<Map />} />
        <Route path='clients' element={<Clients />} />
      </Route>
      <Route path='/*' element={<Navigate to={'/'} />} />
    </Routes>
  );
};

export default PublicRoutes;
