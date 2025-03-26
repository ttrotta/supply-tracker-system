import { Routes, Route } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes'

function App() {
  return (
    <>
      <div className='testing-nav' style={{ display: 'flex', justifyContent: 'center' }}>
        <nav>
          <a href="/home" style={{ margin: '0 10px' }}>Home</a>
          <a href="/login" style={{ margin: '0 10px' }}>Login</a>
          <a href="/stock" style={{ margin: '0 10px' }}>Stock</a>
          <a href="/delivery" style={{ margin: '0 10px' }}>Delivery</a>
          <a href="/map" style={{ margin: '0 10px' }}>Map</a>
          <a href="/clients" style={{ margin: '0 10px' }}>Clients</a>
        </nav>
      </div>
      <Routes>
        <Route path="*" element={<PublicRoutes />} />
      </Routes>
    </>
  )
}

export default App
