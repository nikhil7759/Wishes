import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import './App.css'

const ShopPage = lazy(() => import('./pages/ShopPage'))
const BulkOrder = lazy(() => import('./pages/BulkOrder'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function App() {
  return (
    <SmoothScroll>
      <Preloader />
      <div className="min-h-screen bg-white flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#e5c158] border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/bulk-order" element={<BulkOrder />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App

