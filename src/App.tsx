import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import ShopPage from './pages/ShopPage'
import BulkOrder from './pages/BulkOrder'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Preloader />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/bulk-order" element={<BulkOrder />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
