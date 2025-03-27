import { Routes, Route } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes'

function App() {
  return (
    <>
      <div className='testing-nav' style={{ display: 'flex', justifyContent: 'center' }}>
        <nav>
          <a href="/home">Home</a>
          <a href="/login">Login</a>
          <a href="/stock">Stock</a>
          <a href="/delivery">Delivery</a>
          <a href="/map">Map</a>
          <a href="/clients">Clients</a>
        </nav>
      </div>
      <Routes>
        <Route path="*" element={<PublicRoutes />} />
      </Routes>
    </>
  )
}

export default App
